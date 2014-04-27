## 3. [Web Basics](3_web_basics/readme.md) Reflection

* What 2 new things did you learn about the web?
* What are some important things to remember when setting up your HTML site?
* How did you feel when you saw your web page live?
* Did you have an "aha" moments or were any concepts solidified?
* Did you find any resources on your own that helped you better understand a topic? If so, please list it.

<!-- Add your reflection here. Remove the comment markers -->

Amongst the numerous things I've learned from this lesson, one of the biggest concept was how my local PC requests 
various name servers to simply get in to a domain I type in my browser. I learned that a domain name is an alias for an IP
address, and that if my local name server is not familiar with a certain domain name, and it has only information about 
root name servers, the following series of actions occur:

	1. request list of root name server
	2. root name server gives a list of TLD (top level domain) name servers
	3. request further information about DNS (domain name server) to TLD name server, retrieved from step 2. 
	4. Then, again from the returned list from TLD name servers, request the IP address of the domain name i'm looking for.

When I first saw my webpage live, more curiosity arose. I now know how my index.html went to my repository,
but I still didn't understand why username.github.io showed my index.html. From all the readings i did, I thought I needed 
to register a domain name, pay some website to do my hosting, and a bunch of other things followed by these actions in order to 
have my own web page. But I soon began to remember that domain name is only an IP address, and it all started to clarify.

This lesson was particularly hard for me to follow, not because of git and github, but because of the whole name server stuff.
For some reason I had a hard time understanding what a local name server was, and searching what it is on google only made things worse.
At one point I even began to think that my pc was a local name server. But drawing my own diagram of how stuff works from the reading material 
"introduction to dns" helped me understand visually what was going on. 
This page also helped me understand that my computer is not a local name server: http://computer.howstuffworks.com/dns.htm