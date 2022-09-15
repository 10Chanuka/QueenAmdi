/**
░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░░███╗██████╗░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░████║██╔══██╗██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔████╔██║██║░░██║██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚██╔╝██║██║░░██║██║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚═╝░██║██████╔╝██║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═════╝░╚═╝
 __  __       _ _   _       ____             _          
|  \/  |_   _| | |_(_)     |  _ \  _____   _(_) ___ ___ 
| |\/| | | | | | __| |_____| | | |/ _ \ \ / / |/ __/ _ \
| |  | | |_| | | |_| |_____| |_| |  __/\ V /| | (_|  __/
|_|  |_|\__,_|_|\__|_|     |____/ \___| \_/ |_|\___\___|
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.0
* @file  _amdi_menu.js - QueenAmdi bot main menu

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { AMDI, _default, _default_list_sections, Language } = require('../assets/scripts')
const { amdiVoice } = _default
const { panelList } = _default_list_sections
const Lang = Language.getString('amdiMenu');

/**
 * @cmdInfos { cmd, desc, example, type, react, cmdHideInMenu }
 * @cmdTypes primary, download, logo, profile, admin
*/

AMDI({ cmd: "panel", desc: "Queen Amdi Main Menu", react: "📂", cmdHideInMenu: true }, (async (amdiWA) => {
    let { prefix, sendAudioMsg, sendListMsg, msgDevice } = amdiWA.msgLayout;
   
    const audioURL = amdiVoice
    const pttStatus = true
    let mimeType = msgDevice == 'ios' ? 'audio/ogg; codecs=opus' : 'audio/mp4'
    await sendAudioMsg({ url: audioURL }, {mimetype: mimeType, ptt: pttStatus});

    var listInfo = {}
    listInfo.title = Lang.panelTitle
    listInfo.text = `\n*Hello!* ${amdiWA.msg.pushName}` + Lang.panelText
    listInfo.buttonTXT = 'default'

    const sections = await panelList(prefix);
    return await sendListMsg(listInfo, sections);
}));