const express=require('express');
const dotenv=require('dotenv');
dotenv.config();
const nodemailer = require("nodemailer");
const data=require("./data.json");


const app=express();


const transport=nodemailer.createTransport({
   
    service:"gmail",
    auth:{
        user:process.env.USER,
        pass:process.env.PASS
    }
})

// var htmlvar=`
// <!DOCTYPE html>

// <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
// <head>
// <title></title>
// <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
// <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
// <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
// <style>
// 		* {
// 			box-sizing: border-box;
// 			11
// 		}

// 		body {
// 			margin: 0;
// 			padding: 0;
// 		}

// 		a[x-apple-data-detectors] {
// 			color: inherit !important;
// 			text-decoration: inherit !important;
// 		}

// 		#MessageViewBody a {
// 			color: inherit;
// 			text-decoration: none;
// 		}

// 		p {
// 			line-height: inherit
// 		}

// 		@media (max-width:520px) {
// 			.icons-inner {
// 				text-align: center;
// 			}

// 			.icons-inner td {
// 				margin: 0 auto;
// 			}

// 			.row-content {
// 				width: 100% !important;
// 			}

// 			.image_block img.big {
// 				width: auto !important;
// 			}

// 			.column .border {
// 				display: none;
// 			}

// 			.stack .column {
// 				width: 100%;
// 				display: block;
// 			}
// 		}
// 	</style>
// </head>
// <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
// <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #004292;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td style="width:100%;text-align:center;">
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="15" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td>
// <div align="center" style="line-height:10px"><img src=${data.k_link} style="display: block; height: auto; border: 0; width: 225px; max-width: 100%;" width="225"/></div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="20" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td>
// <div align="center" style="line-height:10px"><img class="big" src=${data.imglink} style="display: block; height: 250 px; border: 0; width: 500px; max-width: 100%;" width="500"/></div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td>
// <div style="font-family: sans-serif">
// <div style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
// <p style="margin: 0; font-size: 16px;">Hello [Name],</p>
// <p style="margin: 0; font-size: 16px; mso-line-height-alt: 14.399999999999999px;"> </p>
// <p style="margin: 0; font-size: 16px;">Greetings from CEG Tech Forum,</p>
// <p style="margin: 0; font-size: 16px; mso-line-height-alt: 14.399999999999999px;"> </p>
// <p style="margin: 0; font-size: 16px;">Here's ${data.name} conducted by ${data.organiser} as a part of Kurukshetra!'22.</p>
// <p style="margin: 0; font-size: 16px; mso-line-height-alt: 14.399999999999999px;"> </p>
// <p style="margin: 0; font-size: 16px;">Register now and get ready to equip yourself with ${data.topic} and grab valuable certificates from ${data.organiser}!</p>
// <p style="margin: 0; font-size: 16px; mso-line-height-alt: 14.399999999999999px;"> </p>
// <p style="margin: 0; font-size: 16px;">Click the button below to register...</p>
// </div>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="10" cellspacing="0" class="button_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td>
// <div align="center">
// <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:38px;width:148px;v-text-anchor:middle;" arcsize="103%" stroke="false" fillcolor="#004292"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
// <div style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#004292;border-radius:39px;width:auto;border-top:1px solid #004292;border-right:1px solid #004292;border-bottom:1px solid #004292;border-left:1px solid #004292;padding-top:5px;padding-bottom:5px;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:1px;"><span style="font-size: 16px; line-height: 1.8; word-break: break-word; mso-line-height-alt: 29px;"><a href=${data.link}>Register Now</a></span></span></div>
// <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
// </div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
// <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td style="vertical-align: middle; text-align: center;">
// <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
// <!--[if !vml]><!-->
// <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
// <!--<![endif]-->
// <tr>

// </tr>
// </table>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </table6
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table><!-- End -->

// </body>
// </html>
// `

var htmlvar=`<h1>Hi this is the justice leage`;

const options ={
    from:"dharunctf@gmail.com",
    to:"",
    subject:"Samplemail",
    html:htmlvar+'<img src="cid:unique@kreata.ee"/>',
	attachments:{
		filename:"samp.jpg",
		path:__dirname+'/justice league wallpaper.jpg',
		cid:"unique@kreata.ee"
	}
};



var list=["aaa@gmail.com","bbb@gmail.com"];


function Send(list){

    for(var i=0;i<list.length;i++){
        options['to']=list[i];
        transport.sendMail(options,(err,info)=>{
            if(err){
                console.log(err);
                console.log("ERROR");
            }else{
                console.log("Success");
            }
        })
    }

}


Send(list);

