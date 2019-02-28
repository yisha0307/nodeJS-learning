var express = require('express') 
// 处理并发
var eventproxy = require('eventproxy')
// nodeJS处理DOM的模块
var cheerio = require('cheerio')
var superagent = require('superagent')
// nodeJS自带的url模块
var url = require('url')

var ep = new eventproxy()

var doubanUrl = 'https://www.douban.com/group/blabla/'
superagent.get(doubanUrl).end((err,res) => {
    if (err) {
        console.error(err)
    }
    var topicUrls = []
    var $ = cheerio.load(res.text)

    $('.olt .title a').each((index, elemt)=>{
        $elemt = $(elemt)
        topicUrls.push($elemt.attr('href'))
    })
    
    ep.after('topic_html', topicUrls.length, topics => {
        topics = topics.map(t => {
            var topicUrl = t[0]
            var topicHtml = t[1]
            var $ = cheerio.load(topicHtml)
            return {
                url: topicUrl,
                topic: $('#content h1').text().trim(),
                comment: $('.reply-doc.content').eq(0).text().trim()
            }
        })

        console.log(topics)
    })

    topicUrls.forEach(topic => {
        superagent.get(topic).end((err, res)=> {
            if (err) {
                console.error(err)
            }
            ep.emit('topic_html', [topic, res.text])
        })
    })
})