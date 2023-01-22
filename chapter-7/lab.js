var a = ["banglore","bengal","boston","new york","america","queens"]
for (b in a){
    document.write(a[b])
    document.write("<br>")
}
a.shift()
a.shift()
a.push("leh")
a.sort()
document.write(a)