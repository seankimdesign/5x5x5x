(function(dust){dust.register("challenges",body_0);function body_0(chk,ctx){return chk.s(ctx.get(["challenges"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"oneChallenge").x(ctx.get(["isCurrent"], false),ctx,{"block":body_2},{}).w(" ").f(ctx.get(["designation"], false),ctx,"h").w("Challenge\" data-catid=\"").f(ctx.get(["order"], false),ctx,"h").w("\"><div class=\"container\"><div class=\"entries\"><h3>").f(ctx.get(["name"], false),ctx,"h").w("</h3>").x(ctx.get(["isCurrent"], false),ctx,{"block":body_3},{}).p("entries",ctx,ctx,{}).w("</div><div class=\"menuArea\"><a class=\"minimizeEntry\">-</a><a class=\"entryDetails\">-</a><a class=\"entryStatistics\">-</a><a class=\"viewAllTopic\">-</a><a class=\"viewAllCategory\">-</a><a class=\"editEntry\">-</a></div><div class=\"timelineArea\"><div class=\"daysElapsed\"></div></div></div></div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w(" currentChallenge");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<div id=\"newEntryBox\"><form id=\"entryUploadForm\" method=\"post\" enctype=\"multipart/form-data\" action=\"/upload\" onsubmit=\"return false;\"><input type=\"file\" name=\"uploadEntry\" class=\"uploadEntry\"/><input type=\"hidden\" name=\"entryid\" value=\"").f(ctx.get(["_id"], false),ctx,"h").w("\"/><label for=\"uploadEntry\"></label><button onclick=\"fnObj.uploadEntry();\" name=\"submit\">Upload</button></form></div>");}body_3.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("contents",body_0);function body_0(chk,ctx){return chk.s(ctx.get(["contents"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div id=\"staticPage\">").s(ctx.get(["markup"], false),ctx,{"block":body_2},{}).w("</div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.h("select",ctx,{"block":body_3},{"key":ctx.get(["tag"], false)},"h");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.h("eq",ctx,{"block":body_4},{"value":"img"},"h").h("eq",ctx,{"block":body_6},{"value":"div"},"h").h("eq",ctx,{"block":body_8},{"value":"p"},"h").h("eq",ctx,{"block":body_10},{"value":"h2"},"h");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<img ").x(ctx.get(["classes"], false),ctx,{"block":body_5},{}).w(" src=\"").f(ctx.get(["content"], false),ctx,"h").w("\"/>");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("class=\"").f(ctx.get(["classes"], false),ctx,"h").w("\"");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("<div ").x(ctx.get(["classes"], false),ctx,{"block":body_7},{}).w(">").f(ctx.get(["content"], false),ctx,"h").w("</div>");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w("class=\"").f(ctx.get(["classes"], false),ctx,"h").w("\"");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w("<p ").x(ctx.get(["classes"], false),ctx,{"block":body_9},{}).w(">").f(ctx.get(["content"], false),ctx,"h").w("</p>");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w("class=\"").f(ctx.get(["classes"], false),ctx,"h").w("\"");}body_9.__dustBody=!0;function body_10(chk,ctx){return chk.w("<h2 ").x(ctx.get(["classes"], false),ctx,{"block":body_11},{}).w(">").f(ctx.get(["content"], false),ctx,"h").w("</h2>");}body_10.__dustBody=!0;function body_11(chk,ctx){return chk.w("class=\"").f(ctx.get(["classes"], false),ctx,"h").w("\"");}body_11.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("entries",body_0);function body_0(chk,ctx){return chk.s(ctx.get(["entries"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"oneEntry\"><div class=\"entryInfo\"><h4>").f(ctx.get(["name"], false),ctx,"h").w("</h4><div class=\"entryDetail\">").f(ctx.get(["detail"], false),ctx,"h").w("</div><div class=\"entryDate\">").f(ctx.get(["entryDate"], false),ctx,"h").w("</div></div><img class=\"entryImage\" src=\"").f(ctx.get(["entrySrc"], false),ctx,"h").w("\"></div>");}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("filter",body_0);function body_0(chk,ctx){return chk.w("<div id=\"filterArea\"></div>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("index",body_0);function body_0(chk,ctx){return chk.w("<!DOCTYPE html><html><head><title>").f(ctx.get(["page"], false),ctx,"h",["uppercaser"]).w(" | Five x Five x Five</title><link rel=\"stylesheet\" href=\"").f(ctx.get(["stylePath"], false),ctx,"h").w("/critical-").f(ctx.get(["colorScheme"], false),ctx,"h").w(".css\"/><link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=PT+Sans:400,700\"></head><body class=\"page_").f(ctx.get(["page"], false),ctx,"h").w(" color_").f(ctx.get(["colorScheme"], false),ctx,"h").w("\"><header><div class=\"container\">").p("logosvg",ctx,ctx,{}).w("<h1>Five <em>by</em> Five <em>by</em> Five</h1></div></header><nav><div class=\"container\">").p("navigation",ctx,ctx,{}).w("</div></nav>").p("filter",ctx,ctx,{}).w("<div id=\"content\">").p("challenges",ctx,ctx,{}).p("topics",ctx,ctx,{}).p("contents",ctx,ctx,{}).w("</div><script src=\"").f(ctx.get(["scriptPath"], false),ctx,"h").w("/util.js\" type=\"text/javascript\"></script><script src=\"").f(ctx.get(["scriptPath"], false),ctx,"h").w("/dust-core.min.js\" type=\"text/javascript\"></script><script src=\"").f(ctx.get(["scriptPath"], false),ctx,"h").w("/dust-helpers.min.js\" type=\"text/javascript\"></script><script src=\"").f(ctx.get(["templatePath"], false),ctx,"h").w("/templates.js\" type=\"text/javascript\"></script>").h("select",ctx,{"block":body_1},{"key":ctx.get(["page"], false)},"h").w("</body></html>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.h("eq",ctx,{"block":body_2},{"value":"manage"},"h").h("eq",ctx,{"block":body_3},{"value":"home"},"h");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<script src=\"").f(ctx.get(["scriptPath"], false),ctx,"h").w("/manage.js\" type=\"text/javascript\"></script>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<script src=\"").f(ctx.get(["scriptPath"], false),ctx,"h").w("/main.js\" type=\"text/javascript\"></script><link rel=\"stylesheet\" href=\"").f(ctx.get(["stylePath"], false),ctx,"h").w("/styles.css\"/>");}body_3.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("logosvg",body_0);function body_0(chk,ctx){return chk.w("<svg version=\"1.1\" id=\"five-five-logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"viewBox=\"0 0 612 662\"><path id=\"side\" d=\"M465.8,201.4l33.5-27.6v-35.9l-140.3,0l-33.5,27.6l-0.1,58.8l-73.6,0L218.4,252v58.9l-46.4,0l-33.5,27.6v164.8c0,0,55.8,0,61.1,0c19,0,41.1,10.1,41.1,45.2c0,6.6-1.1,13-3.2,18.9c-4.1,0.8-8.6,1.3-13.5,1.3c-7.1,0-32.2,0-52,0c0,0-33.3,27.6-33.5,27.6v36c6.6,0,34.4,0,52.7,0c26.7,0,46.8-7.5,61-19.7c0.2-0.1,32.8-27.1,33-27.2c18.5-15.6,27.1-39,27.1-64.1c0-9.1-0.9-17.2-2.4-24.6c8.6-3.3,16-7.7,22.2-13.1c0.2-0.1,32.8-27.1,33-27.2c12.4-10.5,20.4-24.4,24.3-40.1c21.2-1.8,37.7-8.8,49.8-19.2c0.2-0.1,32.8-27.1,33-27.2c18.5-15.6,27.1-39,27.1-64.1c0-61.2-38.6-81.8-71.7-81.8c-9.1,0-15.8,0.1-30.4,0v-22.7H465.8z M279.4,374.4c19,0,41.1,10.1,41.1,45.2c0,6.5-1,12.9-3.2,18.7c-4.2,0.8-8.6,1.3-13.6,1.3c-7.1,0-93.7,0-93.7,0v-65.2C238.9,374.4,276.2,374.4,279.4,374.4z M410.8,353.3c-4,0-14,0-25.4,0c-12.5-31.2-40.3-42.7-65-42.7c-9.1,0-15.8,0.1-30.4,0v-22.7h35.3l0,0c0,0,55.9,0,61.1,0c19,0,41.1,10.1,41.1,45.2c0,6.6-1.1,13-3.2,18.9C420.2,352.8,415.7,353.3,410.8,353.3z\"/><path id=\"face\" d=\"M497,171v-30.8l-135.3,0v86.5l-107.1,0v86.6l-80,0v159.8h58.5c10.3,0,43.7,3.4,43.7,47.8c0,24.4-13.9,50.4-52.8,50.4h-49.4v30.9h29.5h20.6c62.8,0,85.1-41.7,85.1-80.8c0-17.4-3.2-32.3-9.5-44.5l-1.9-3.8h6.2c62.8,0,85.1-41.7,85.1-80.8c0-0.7,0-1.4,0-2.1l-0.1-3.6h22.1c62.8,0,85.1-41.7,85.1-80.8c0-58.5-35.8-79.3-69.2-79.3l-8.4,0c-5.8,0-12.1,0-22,0l-2.6,0V171H497z M303.9,442.1h-96.3v-98l105.4,0c10.3,0,43.7,3.4,43.7,47.8C356.8,416.2,342.9,442.1,303.9,442.1z M420.2,257.6c10.3,0,43.7,3.4,43.7,47.8c0,24.4-13.9,50.4-52.8,50.4l-25.4,0h-1.7l-0.6-1.6c-10.3-25.7-33.7-41.1-62.6-41.1l-8.4,0c-5.8,0-12.1,0-22,0l-2.6,0v-55.5L420.2,257.6z\"/></svg>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("navigation",body_0);function body_0(chk,ctx){return chk.h("eq",ctx,{"else":body_1,"block":body_2},{"key":ctx.get(["page"], false),"value":"stats"},"h").w("<a id=\"configureViews\" href=\"/stats\">Configure Views</a>").h("eq",ctx,{"else":body_3,"block":body_4},{"key":ctx.get(["page"], false),"value":"manage"},"h");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<a id=\"viewStats\" href=\"/stats\">View Stats</a>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<a id=\"viewStats\" href=\"/\">Back Home</a>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<a id=\"manageTopics\" href=\"/manage\">Manage Topics</a>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<a id=\"viewStats\" href=\"/\">Back Home</a>");}body_4.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("singletopic",body_0);function body_0(chk,ctx){return chk.w("<div class=\"oneTopic").nx(ctx.get(["isActive"], false),ctx,{"block":body_1},{}).w("\" data-count=\"").f(ctx.get(["count"], false),ctx,"h").w("\" data-topicid=\"").f(ctx.get(["_id"], false),ctx,"h").w("\"><div class=\"topicInfo\"><div class=\"topicIcon\">").x(ctx.get(["hasIcon"], false),ctx,{"else":body_2,"block":body_3},{}).w("</div><h4 class=\"topicName\">").f(ctx.get(["name"], false),ctx,"h").w("</h4></div><div class=\"buttons\"><a href=\"#\" class=\"viewEntries\">View Entries</a><a href=\"#\" class=\"modifyTopic\">Modify Topic</a><div class=\"modifyForm\" style=\"display: none;\"><input type=\"text\" class=\"editName\"/><a class=\"submitEdit\" href=\"#\">EDIT</a></div><a href=\"#\" class=\"removeTopic\">Remove Topic</a></div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w(" inactive");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<form method=\"post\" name=\"uploadIconForm\" class=\"uploadIconForm\" enctype=\"multipart/form-data\" action=\"/upload\" onsubmit=\"return false;\"><input type=\"file\" name=\"uploadIcon\" class=\"uploadIcon\"/><label for=\"uploadIcon\"></label><input type=\"hidden\" name=\"topicid\" value=\"").f(ctx.get(["_id"], false),ctx,"h").w("\"/><button type=\"submit\" name=\"submit\" class=\"iconUploader\">Upload</button></form>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<img src=\"").f(ctx.get(["iconSrc"], false),ctx,"h").w("\"/>");}body_3.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("topics",body_0);function body_0(chk,ctx){return chk.s(ctx.get(["topics"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div id=\"manageView\"><div id=\"designList\">").s(ctx.get(["design"], false),ctx,{"block":body_2},{}).w("<div id=\"designForm\" class=\"newTopicForm\"><input type=\"text\" name=\"designTopic\" id=\"designTopic\"/><a href=\"#\" class=\"newTopicButton\" id=\"newDesignTopicSubmit\">Submit New Design Topic</a></div></div><div id=\"drawingList\">").s(ctx.get(["drawing"], false),ctx,{"block":body_3},{}).w("<div id=\"drawingForm\" class=\"newTopicForm\"><input type=\"text\" name=\"drawingTopic\" id=\"drawingTopic\"/><a href=\"#\" class=\"newTopicButton\" id=\"newDrawingTopicSubmit\">Submit New Drawing Topic</a></div></div></div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.p("singletopic",ctx,ctx,{});}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.p("singletopic",ctx,ctx,{});}body_3.__dustBody=!0;return body_0}(dust));