//page1

 Course categories= https://edutech-app1.herokuapp.com/category
  localhost:9500/category 

  Course level = https://edutech-app1.herokuapp.com/level
   localhost:9500/level

//page2 

level based categoryid= https://edutech-app1.herokuapp.com/level?categoryid=1
localhost:9500/level?categoryid=1



details of level based on  category id = https://edutech-app1.herokuapp.com/details?categoryid=2
 localhost:9500/details?categoryid=1

on levelid => // https://edutech-app1.herokuapp.com/details?levelid=1
 localhost:9500/details?levelid=1



//page3 Book Course (post)=  localhost:9500/BookCourse (body) > {
  
name
"Aboli"
email
"abos123@gmail.com"
address
"101 , sector 2"
phone
984267499
cost
2999
}

//page4 See all order place=
 Get Order on basis of emailId https://edutech-app1.herokuapp.com/viewOrder?email=abos123@gmail.com

localhost:9500/viewCourse?email=abos123@gmail.com

//page5 update order (put)=
 https://edutech-app1.herokuapp.com/updateOrder/6251a39a151064904127bc2c (body) { "status":"In Transit", "bankName":"" }

localhost:9500/updateCourse/6251a39a151064904127bc2c (body) { "status":"In Transit", "bankName":"" }