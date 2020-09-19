//功能一：乘法表
document.write("<table>"); 
for(let i=3; i<=15; i++ ) {
    document.write("<tr>");

    for(let j=1; j<=15; j++ ) { 
        sum=i*j;
        document.write("<td>"+i+"*"+j+"="+sum+"</td>");
    }

    document.write("</tr>");
}
document.write("</table>"); 