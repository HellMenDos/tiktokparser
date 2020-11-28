# tiktokparser

Основано на tiktok-scraper 
В этой библиотеке есть проблемы в получении видео по хэштэга, 
данные которые возвращаются содержат невалидные ссылки, но получение видео по хэштэгам 
можно очень просто сделать при помощи команд через терминал, поэтому устанавливаем 
библиотеку глобально 

npm i -g tiktok-scraper

после этого можно использовать следующие команды 

tiktok-scraper user USERNAME -d -n 100
  tiktok-scraper user USERNAME -d -n 100 -f customFileName
  tiktok-scraper hashtag HASHTAG_NAME -d -n 100
  tiktok-scraper trend -d -n 100
  tiktok-scraper music MUSICID -n 100
  tiktok-scraper music MUSIC_ID -d -n 50
  tiktok-scraper video https://www.tiktok.com/@tiktok/video/6807491984882765062
  tiktok-scraper history
  tiktok-scraper history -r user:bob
  tiktok-scraper history -r all
  tiktok-scraper from-file BATCH_FILE ASYNC_TASKS -d -n 25
  
Так же при скачивании созадется папка #TAG поэтому нужно переимновать папку чтобы доступ к файлам был безпроблемный в любом 
из микрофреймворков по типу express.js
