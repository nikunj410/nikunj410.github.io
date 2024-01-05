---
title: "CV"
permalink: /cv/
date: 2023-01-26T03:02:20+00:00
seo_description: cv about me
tags: cv, resume
---

<script>
function fetchHeader(url, wch) {
    try {
        var req=new XMLHttpRequest();
        req.open("HEAD", url, false);
        req.send(null);
        if(req.status== 200){
            var gmtDate = new Date(req.getResponseHeader(wch));
            const options = {
                timeZone: 'America/Los_Angeles',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                timeZoneName: 'short'
            };
            return gmtDate.toLocaleString("en-US", options)
        }
        else return false;
    } catch(er) {
        return er.message;
    }
}
</script>

<p style="margin-bottom:0;"><a href="{{ site.baseurl }}/docs/CV.pdf">Click here for my latest CV in pdf format.</a></p><br />
<p id="cv_last_update" style="font-size:small;"></p><script>document.getElementById('cv_last_update').innerHTML = "Last updated: " + fetchHeader('{{ site.baseurl }}/docs/CV.pdf','Last-Modified');</script>
