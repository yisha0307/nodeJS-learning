var eventproxy = require("eventproxy")
var express = require('express')
var superagent = require("superagent")
var cheerio = require("cheerio");
var url = require("url")

var ep = new eventproxy()
var app = express()

var cnodeUrl = 'https://cnodejs.org'

superagent.get(cnodeUrl).end((err, res) => {
    if (err) {
        return console.error(err)
    }
    var topicUrls = [];
    var $ = cheerio.load(res.text);

    $('#topic_list .topic_title').each((idx, element)=>{
        var $element = $(element);
        var href = url.resolve(cnodeUrl, $element.attr('href'))
        topicUrls.push(href)
    })

    ep.after("topic_html", topicUrls.length, topics => {
        topics = topics.map(topicPair => {
            var topicUrl = topicPair[0]
            var topicHtml = topicPair[1]
            var $ = cheerio.load(topicHtml)

            return ({
                title: $('.topic_full_title').text().trim(),
                href: topicUrl,
                comment1: $('.reply_content').eq(0).text().trim(),
            })
        })
        console.log('final: ')
        console.log(topics)
    })

    topicUrls.forEach(topicUrl => {
        superagent.get(topicUrl).end((err,res) => {
            if (err) {
                console.error(err)
            }
            console.log('fetch '+topicUrl+' successful')
            ep.emit('topic_html', [topicUrl, res.text])
        })
    })
})


