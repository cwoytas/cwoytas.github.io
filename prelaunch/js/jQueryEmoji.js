/*
Copyright (c) by Rodrigo Polo - http://RodrigoPolo.com
Licensed under MIT
*/
(function($) {

	var emojis = '👩‍❤️‍💋‍👩,👩‍👩‍👧‍👧,👩‍👩‍👧‍👦,👩‍👩‍👦‍👦,👨‍❤️‍💋‍👨,👨‍👩‍👧‍👧,👨‍👩‍👧‍👦,👨‍👩‍👦‍👦,👨‍👨‍👧‍👧,👨‍👨‍👧‍👦,👨‍👨‍👦‍👦,👩‍❤️‍👩,👩‍👩‍👧,👩‍👩‍👦,👩‍👧‍👧,👩‍👧‍👦,👩‍👦‍👦,👨‍❤️‍👨,👨‍👩‍👧,👨‍👨‍👧,👨‍👨‍👦,👨‍👧‍👧,👨‍👧‍👦,👨‍👦‍👦,👩‍👧,👩‍👦,👨‍👧,👨‍👦,😂,❤️,♥️,😍,😭,😊,😒,😘,💕,☺️,😩,👌🏿,👌🏾,👌🏽,👌🏼,👌🏻,👌,😔,😏,😁,♻️,😉,👍🏿,👍🏾,👍🏽,👍🏼,👍🏻,👍,🙏🏿,🙏🏾,🙏🏽,🙏🏼,🙏🏻,🙏,😌,🎶,😳,🙌🏿,🙌🏾,🙌🏽,🙌🏼,🙌🏻,🙌,🙈,😢,😎,✌🏿,✌🏾,✌🏽,✌🏼,✌🏻,✌️,👀,😅,✨,😴,😄,💜,💔,💯,😑,💖,💙,😕,💁🏿‍♂️,💁🏾‍♂️,💁🏽‍♂️,💁🏼‍♂️,💁🏻‍♂️,💁‍♂️,💁🏿,💁🏾,💁🏽,💁🏼,💁🏻,💁,😜,😞,😋,😐,😪,👏🏿,👏🏾,👏🏽,👏🏼,👏🏻,👏,💘,💗,💞,⬅️,🙊,✋🏿,✋🏾,✋🏽,✋🏼,✋🏻,✋,💋,👉🏿,👉🏾,👉🏽,👉🏼,👉🏻,👉,🌸,😱,😈,🔥,😡,😃,🎉,👊🏿,👊🏾,👊🏽,👊🏼,👊🏻,👊,😫,📷,🌹,😝,💪🏿,💪🏾,💪🏽,💪🏼,💪🏻,💪,💀,☀️,💛,😤,🌚,😆,😓,👈🏿,👈🏾,👈🏽,👈🏼,👈🏻,👈,✔️,😻,😀,😷,💚,👋🏿,👋🏾,👋🏽,👋🏼,👋🏻,👋,😣,💓,▶️,👑,😚,😛,😥,😇,🎧,✅,😖,➡️,😠,😬,🌟,🔫,🙋🏿‍♂️,🙋🏾‍♂️,🙋🏽‍♂️,🙋🏼‍♂️,🙋🏻‍♂️,🙋‍♂️,🙋🏿,🙋🏾,🙋🏽,🙋🏼,🙋🏻,🙋,👎🏿,👎🏾,👎🏽,👎🏼,👎🏻,👎,1️⃣,💃🏿,💃🏾,💃🏽,💃🏼,💃🏻,💃,🎵,😶,2️⃣,💫,✊🏿,✊🏾,✊🏽,✊🏼,✊🏻,✊,👇🏿,👇🏾,👇🏽,👇🏼,👇🏻,👇,🔴,🙅🏿‍♂️,🙅🏾‍♂️,🙅🏽‍♂️,🙅🏼‍♂️,🙅🏻‍♂️,🙅‍♂️,🙅🏿,🙅🏾,🙅🏽,🙅🏼,🙅🏻,🙅,💥,↪️,↩️,©️,💭,👅,💩,😰,💎,🙆🏿‍♂️,🙆🏾‍♂️,🙆🏽‍♂️,🙆🏼‍♂️,🙆🏻‍♂️,🙆‍♂️,🙆🏿,🙆🏾,🙆🏽,🙆🏼,🙆🏻,🙆,🍕,😹,🌞,🍃,💦,🐧,💤,🚶🏿‍♀️,🚶🏾‍♀️,🚶🏽‍♀️,🚶🏼‍♀️,🚶🏻‍♀️,🚶‍♀️,🚶🏿,🚶🏾,🚶🏽,🚶🏼,🚶🏻,🚶,✈️,🎈,⭐️,🎀,☑️,😟,🔞,😨,🍀,🌺,🎤,👐🏿,👐🏾,👐🏽,👐🏼,👐🏻,👐,👻,◀️,🌴,‼️,💅🏿,💅🏾,💅🏽,💅🏼,💅🏻,💅,❌,👽,🙇🏿‍♀️,🙇🏾‍♀️,🙇🏽‍♀️,🙇🏼‍♀️,🙇🏻‍♀️,🙇‍♀️,🙇🏿,🙇🏾,🙇🏽,🙇🏼,🙇🏻,🙇,☁️,⚽️,👼🏿,👼🏾,👼🏽,👼🏼,👼🏻,👼,👯‍♂️,👯,❗️,❄️,☝🏿,☝🏾,☝🏽,☝🏼,☝🏻,☝️,😙,🌈,🌙,💟,💝,🎁,🍻,😧,🌍,🎥,⚓️,⚡️,♣️,✖️,🏃🏿‍♀️,🏃🏾‍♀️,🏃🏽‍♀️,🏃🏼‍♀️,🏃🏻‍♀️,🏃‍♀️,🏃🏿,🏃🏾,🏃🏽,🏃🏼,🏃🏻,🏃,🌻,🌎,💐,🐶,💰,🌿,👫,🍂,🌷,🎂,🐱,☕️,😵,👆🏿,👆🏾,👆🏽,👆🏼,👆🏻,👆,😮,😯,🏀,🎄,💍,🌝,😲,👭,💸,💏,😿,🙉,💨,🌵,♨️,☎️,🍁,👸🏿,👸🏾,👸🏽,👸🏼,👸🏻,👸,💆🏿‍♂️,💆🏾‍♂️,💆🏽‍♂️,💆🏼‍♂️,💆🏻‍♂️,💆‍♂️,💆🏿,💆🏾,💆🏽,💆🏼,💆🏻,💆,💌,🏆,🙍🏿‍♂️,🙍🏾‍♂️,🙍🏽‍♂️,🙍🏼‍♂️,🙍🏻‍♂️,🙍‍♂️,🙍🏿,🙍🏾,🙍🏽,🙍🏼,🙍🏻,🙍,🇺🇸,🎊,🌼,🔪,👄,🍟,🍩,😦,🌊,💣,🆗,🌀,🚀,☔️,💑,🍭,🎬,🐷,👿,🐝,😽,💢,🎼,🎅🏿,🎅🏾,🎅🏽,🎅🏼,🎅🏻,🎅,🌏,🏈,🎸,♦️,🐼,💬,🍓,😼,🍌,🍉,⛄️,😸,♠️,🔝,🍆,🔮,🍴,📲,📱,⛅️,⚠️,🙀,🔸,👶🏿,👶🏾,👶🏽,👶🏼,👶🏻,👶,🐾,👣,🍺,🍷,⭕️,📹,🐰,🍹,🚬,👾,🍑,🐍,🐢,🍒,😗,🐸,🌌,🚨,🐣,📕,🍬,🍔,🐻,🐯,🚗,⏩,🍦,🍍,🌾,💉,🚮,🍫,▪️,📺,💊,🐙,🎃,🍇,😺,💿,🍸,🍰,🎮,™️,⬇️,🚫,💄,🐳,📝,®️,🍪,🐬,🔊,👨🏿,👨🏾,👨🏽,👨🏼,👨🏻,👨,🐥,🐒,3️⃣,📚,👹,💂🏿‍♀️,💂🏾‍♀️,💂🏽‍♀️,💂🏼‍♀️,💂🏻‍♀️,💂‍♀️,💂🏿,💂🏾,💂🏽,💂🏼,💂🏻,💂,📢,✂️,👧🏿,👧🏾,👧🏽,👧🏼,👧🏻,👧,🎓,🇫🇷,⚾️,🚦,👩🏿,👩🏾,👩🏽,👩🏼,👩🏻,👩,🎆,🌠,🆘,🍄,😾,🛅,👠,🎯,🏊🏿‍♀️,🏊🏾‍♀️,🏊🏽‍♀️,🏊🏼‍♀️,🏊🏻‍♀️,🏊‍♀️,🏊🏿,🏊🏾,🏊🏽,🏊🏼,🏊🏻,🏊,🔑,👙,👪,✏️,🐘,💧,🌱,🍎,🆒,📞,💵,🏡,📖,💇🏿‍♂️,💇🏾‍♂️,💇🏽‍♂️,💇🏼‍♂️,💇🏻‍♂️,💇‍♂️,💇🏿,💇🏾,💇🏽,💇🏼,💇🏻,💇,💻,💡,❓,🔙,👦🏿,👦🏾,👦🏽,👦🏼,👦🏻,👦,🔐,🙎🏿‍♂️,🙎🏾‍♂️,🙎🏽‍♂️,🙎🏼‍♂️,🙎🏻‍♂️,🙎‍♂️,🙎🏿,🙎🏾,🙎🏽,🙎🏼,🙎🏻,🙎,🍊,↔️,🌅,🍗,🔵,🚘,🍧,🇮🇹,🐦,4️⃣,🇬🇧,🌛,👓,🐐,🌃,👵🏿,👵🏾,👵🏽,👵🏼,👵🏻,👵,⚫️,🌑,👬,⚪️,🛃,🐠,🏠,🔃,🌜,📍,🌕,👟,🍋,🍼,🎨,✉️,🍝,↘️,5️⃣,🎐,🍥,↗️,🌲,🆙,⬆️,🎭,👃🏿,👃🏾,👃🏽,👃🏼,👃🏻,👃,🐽,🐟,👳🏿‍♀️,👳🏾‍♀️,👳🏽‍♀️,👳🏼‍♀️,👳🏻‍♀️,👳‍♀️,👳🏿,👳🏾,👳🏽,👳🏼,👳🏻,👳,🐨,👂🏿,👂🏾,👂🏽,👂🏼,👂🏻,👂,✳️,🔹,🚿,↙️,🐛,🍜,🎩,👰🏿,👰🏾,👰🏽,👰🏼,👰🏻,👰,⛽️,🏁,🐴,⌚️,🐵,🚼,🆕,🆓,🎇,🌽,🎾,⏰,🔋,❕,🐺,🗿,🐮,📣,👴🏿,👴🏾,👴🏽,👴🏼,👴🏻,👴,👗,🔗,🐔,🍳,🐋,↖️,🌳,🍱,📌,🔜,🔁,🐉,🐹,⛳️,🏄🏿‍♀️,🏄🏾‍♀️,🏄🏽‍♀️,🏄🏼‍♀️,🏄🏻‍♀️,🏄‍♀️,🏄🏿,🏄🏾,🏄🏽,🏄🏼,🏄🏻,🏄,🐭,🌒,🚙,🅰️,⁉️,🈹,🔌,🌓,♋️,🔱,🍞,👮🏿‍♀️,👮🏾‍♀️,👮🏽‍♀️,👮🏼‍♀️,👮🏻‍♀️,👮‍♀️,👮🏿,👮🏾,👮🏽,👮🏼,👮🏻,👮,🍵,🎣,🌔,🚲,👤,🍚,📻,🐤,⤵️,🌘,↕️,🇪🇸,🌗,🔘,0️⃣,🐑,👱🏿‍♀️,👱🏾‍♀️,👱🏽‍♀️,👱🏼‍♀️,👱🏻‍♀️,👱‍♀️,👱🏿,👱🏾,👱🏽,👱🏼,👱🏻,👱,🌖,🔒,🍏,👺,➰,🚩,🔄,🐎,🍤,🌄,🌋,🐓,📥,💒,🍣,〰️,🍨,⏪,🍅,🐇,✴️,🔺,🔆,➕,👲🏿,👲🏾,👲🏽,👲🏼,👲🏻,👲,🏪,👥,🐞,🔻,🇩🇪,⤴️,📛,🛀🏿,🛀🏾,🛀🏽,🛀🏼,🛀🏻,🛀,⛔️,🐊,🌰,🐕,🐈,🔨,🍖,🐚,❇️,⛵️,6️⃣,🅱️,Ⓜ️,🐩,♒️,🍲,👖,🍯,🎹,🔓,✒️,🗽,💲,🏂,💮,👔,💠,♈️,🚺,🐜,♏️,🌇,⏳,🅾️,🐲,7️⃣,🐌,📀,👕,🎲,➖,🎎,♐️,🎱,🚌,🍮,🎌,〽️,🐫,🍛,🚂,🏥,🇯🇵,🔷,🎋,🔔,♌️,♊️,🍐,🔶,♉️,🌐,🚪,🕕,🚔,📩,🌂,🎷,⛪️,🚴🏿‍♀️,🚴🏾‍♀️,🚴🏽‍♀️,🚴🏼‍♀️,🚴🏻‍♀️,🚴‍♀️,🚴🏿,🚴🏾,🚴🏽,🚴🏼,🚴🏻,🚴,♓️,🍡,♑️,🏢,🚣🏿‍♀️,🚣🏾‍♀️,🚣🏽‍♀️,🚣🏼‍♀️,🚣🏻‍♀️,🚣‍♀️,🚣🏿,🚣🏾,🚣🏽,🚣🏼,🚣🏻,🚣,👒,👞,🏩,🗻,🐪,👜,⌛️,❎,🎺,🏫,🐄,🌆,👷🏿‍♀️,👷🏾‍♀️,👷🏽‍♀️,👷🏼‍♀️,👷🏻‍♀️,👷‍♀️,👷🏿,👷🏾,👷🏽,👷🏼,👷🏻,👷,🚽,🐖,❔,🔰,🎻,🔛,💳,🆔,㊙️,🎡,🎳,♎️,♍️,💈,👛,🎢,🐀,📅,🏉,🐏,🔼,🔲,📴,🗼,㊗️,👘,🇷🇺,🚢,🔎,🔍,🚒,🕦,🚓,🃏,🌉,📦,🚖,📆,🏇,🐅,8️⃣,👢,🚑,9️⃣,🔳,🐗,🎒,➿,💷,ℹ,🐂,🍙,🆚,🔚,🅿️,👡,⛺️,💺,🚕,◾️,💼,📰,🎪,🔯,🚹,🏰,🔦,🌁,⏫,🎍,🎫,🚁,💽,🚍,🍈,▫️,🏤,🔟,📓,🔕,🍢,🎏,🎠,🐡,📈,🍠,🎿,🕛,📶,🚧,#️⃣,◼️,📡,💶,👚,📒,🐆,🔅,🕒,🏬,🚚,🍶,🚃,🚤,🇰🇷,📼,🕐,⏬,🐃,🔽,💴,🔇,🎽,⬜️,♿️,🕑,📎,🏧,🎦,🔭,🎑,📘,◻️,📮,📧,🐁,🚄,🉐,🔩,🆖,🏨,🚾,🏮,🔂,📬,📉,📗,🚜,⛲️,🚇,📋,📵,🕓,🚭,⬛️,🎰,🕔,🛁,📜,🚉,🍘,🏦,🔧,🈯️,🚛,📄,⛎,📊,🚷,🇨🇳,📳,🕙,🕘,🚅,🚐,🚊,🕗,🈳,🚥,🚵🏿‍♀️,🚵🏾‍♀️,🚵🏽‍♀️,🚵🏼‍♀️,🚵🏻‍♀️,🚵‍♀️,🚵🏿,🚵🏾,🚵🏽,🚵🏼,🚵🏻,🚵,🔬,🏯,🔖,📑,👝,🆎,📃,🎴,🕚,📠,🕖,◽️,💱,🔉,💹,🆑,💾,🏣,🔈,🗾,🈺,🀄️,📨,📙,🚻,🈚️,🈶,📐,🚋,🈸,🚎,🈷️,🔢,📔,🈲,🈵,📯,🏭,🚸,🚆,📏,📟,🉑,🈴,🔏,🕜,🈂️,📤,🔀,📫,🚈,🕤,🚏,📂,📁,🚰,📇,🕝,🚝,🕧,🕥,🔤,📪,🕟,🚞,🚯,🕞,➗,🕢,🕠,🔠,📭,🔣,🚡,🕣,🕡,🔡,🚠,🈁,🛂,🚱,🚟,🛄,🚳,🏳️‍🌈,🕵🏿‍♀️,🕵🏾‍♀️,🕵🏽‍♀️,🕵🏼‍♀️,🕵🏻‍♀️,🕵️‍♀️,🕵🏿,🕵🏾,🕵🏽,🕵🏼,🕵🏻,☹️,☠️,🤗,🤖,🤕,🤔,🤓,🤒,🤑,🤐,🙄,🙃,🙂,🙁,🕵,🤘🏿,🤘🏾,🤘🏽,🤘🏼,🤘🏻,🖖🏿,🖖🏾,🖖🏽,🖖🏼,🖖🏻,🖕🏿,🖕🏾,🖕🏽,🖕🏼,🖕🏻,🖐🏿,🖐🏾,🖐🏽,🖐🏼,🖐🏻,✍🏿,✍🏾,✍🏽,✍🏼,✍🏻,🤘,✍️,🖖,🖕,🖐,🕶,👁‍🗨,👁,🏋🏿‍♀️,🏋🏾‍♀️,🏋🏽‍♀️,🏋🏼‍♀️,🏋🏻‍♀️,⛹🏿‍♀️,⛹🏾‍♀️,⛹🏽‍♀️,⛹🏼‍♀️,⛹🏻‍♀️,🏌️‍♀️,🏋️‍♀️,⛹️‍♀️,🏋🏿,🏋🏾,🏋🏽,🏋🏼,🏋🏻,⛹🏿,⛹🏾,⛹🏽,⛹🏼,⛹🏻,🕴,🏌,🏋,*️⃣,❣️,✡️,✝️,⚜️,⚛️,☸️,☯️,☮️,☪️,☦️,☣️,☢️,🛐,🗯,🕎,🕉,⚱️,⚰️,⚙️,⚗️,⚖️,⚔️,⌨️,🛢,🛡,🛠,🛏,🛎,🛍,🛌,🛋,🗳,🗡,🗞,🗝,🗜,🗓,🗒,🗑,🗄,🗃,🗂,🖼,🖲,🖱,🖨,🖥,🖍,🖌,🖋,🖊,🖇,🕹,🕳,🕰,🕯,📿,📽,📸,🏺,🏷,🏴,🏳,🎞,🎛,🎚,🎙,🌡,🛳,🛰,🛬,🛫,🛩,🛥,🛤,🛣,🗺,🕍,🕌,🕋,🏟,🏞,🏝,🏜,🏛,🏚,🏙,🏘,🏗,🏖,🏕,🏔,🏎,🏍,🏹,🏸,🏵,🏓,🏒,🏑,🏐,🏏,🏅,🎟,🎗,🎖,🧀,🍿,🍾,🍽,🌶,🌯,🌮,🌭,☘️,☄️,☃️,☂️,🦄,🦃,🦂,🦁,🦀,🕸,🕷,🕊,🐿,🌬,🌫,🌪,🌩,🌨,🌧,🌦,🌥,🌤,🗣,⏺,⏹,⏸,⏯,⏮,⏭,⛱,⛓,⛏,⚒,⏲,⏱,⛴,⛰,⛩,⛹,⛸,⛷,⛈,⛑,🇿🇼,🇿🇲,🇿🇦,🇾🇹,🇾🇪,🇽🇰,🇼🇸,🇼🇫,🇻🇺,🇻🇳,🇻🇮,🇻🇬,🇻🇪,🇻🇨,🇻🇦,🇺🇿,🇺🇾,🇺🇬,🇺🇦,🇹🇿,🇹🇼,🇹🇻,🇹🇹,🇹🇷,🇹🇴,🇹🇳,🇹🇲,🇹🇱,🇹🇰,🇹🇯,🇹🇭,🇹🇬,🇹🇫,🇹🇩,🇹🇨,🇸🇿,🇸🇾,🇸🇽,🇸🇻,🇸🇹,🇸🇸,🇸🇷,🇸🇴,🇸🇳,🇸🇲,🇸🇱,🇸🇰,🇸🇮,🇸🇭,🇸🇬,🇸🇪,🇸🇩,🇸🇨,🇸🇧,🇸🇦,🇷🇼,🇷🇸,🇷🇴,🇷🇪,🇶🇦,🇵🇾,🇵🇼,🇵🇹,🇵🇸,🇵🇷,🇵🇳,🇵🇲,🇵🇱,🇵🇰,🇵🇭,🇵🇬,🇵🇫,🇵🇪,🇵🇦,🇴🇲,🇳🇿,🇳🇺,🇳🇷,🇳🇵,🇳🇴,🇳🇱,🇳🇮,🇳🇬,🇳🇫,🇳🇪,🇳🇨,🇳🇦,🇲🇿,🇲🇾,🇲🇽,🇲🇼,🇲🇻,🇲🇺,🇲🇹,🇲🇸,🇲🇷,🇲🇶,🇲🇵,🇲🇴,🇲🇳,🇲🇲,🇲🇱,🇲🇰,🇲🇭,🇲🇬,🇲🇪,🇲🇩,🇲🇨,🇲🇦,🇱🇾,🇱🇻,🇱🇺,🇱🇹,🇱🇸,🇱🇷,🇱🇰,🇱🇮,🇱🇨,🇱🇧,🇱🇦,🇰🇿,🇰🇾,🇰🇼,🇰🇵,🇰🇳,🇰🇲,🇰🇮,🇰🇭,🇰🇬,🇰🇪,🇯🇴,🇯🇲,🇯🇪,🇮🇸,🇮🇷,🇮🇶,🇮🇴,🇮🇳,🇮🇲,🇮🇱,🇮🇪,🇮🇩,🇮🇨,🇭🇺,🇭🇹,🇭🇷,🇭🇳,🇭🇰,🇬🇾,🇬🇼,🇬🇺,🇬🇹,🇬🇸,🇬🇷,🇬🇶,🇬🇵,🇬🇳,🇬🇲,🇬🇱,🇬🇮,🇬🇭,🇬🇬,🇬🇫,🇬🇪,🇬🇩,🇬🇦,🇫🇴,🇫🇲,🇫🇰,🇫🇯,🇫🇮,🇪🇺,🇪🇹,🇪🇷,🇪🇭,🇪🇬,🇪🇪,🇪🇨,🇩🇿,🇩🇴,🇩🇲,🇩🇰,🇩🇯,🇨🇿,🇨🇾,🇨🇽,🇨🇼,🇨🇻,🇨🇺,🇨🇷,🇨🇴,🇨🇲,🇨🇱,🇨🇰,🇨🇮,🇨🇭,🇨🇬,🇨🇫,🇨🇩,🇨🇨,🇨🇦,🇧🇿,🇧🇾,🇧🇼,🇧🇹,🇧🇸,🇧🇷,🇧🇶,🇧🇴,🇧🇳,🇧🇲,🇧🇱,🇧🇯,🇧🇮,🇧🇭,🇧🇬,🇧🇫,🇧🇪,🇧🇩,🇧🇧,🇧🇦,🇦🇿,🇦🇽,🇦🇼,🇦🇺,🇦🇹,🇦🇸,🇦🇷,🇦🇶,🇦🇴,🇦🇲,🇦🇱,🇦🇮,🇦🇬,🇦🇫,🇦🇪,🇦🇩'.split(',');
	var regx_arr=[];
	var noExtra = function(s){return s.replace(/\ufe0f|\u200d/gm, '');}
	var toSurrogatePairs = function(r){for(var t="",n=0;n<r.length;n++)t+="\\u"+("000"+r[n].charCodeAt(0).toString(16)).substr(-4);return t}
	var toCodePoint = function(t){for(var n=[],r=0,o=0,h=0;h<t.length;)r=t.charCodeAt(h++),o?(n.push((65536+(o-55296<<10)+(r-56320)).toString(16)),o=0):r>=55296&&56319>=r?o=r:n.push(r.toString(16));return n.join("-")}
	for (var i=0;i<emojis.length;i++){regx_arr.push(toSurrogatePairs(emojis[i]));};
	var re = new RegExp('(' + regx_arr.join('|') + ')', 'g');
	regx_arr = null;
	emojis = null;

	var parser = function (txt, path, alt, eclass, ext){
		return txt.replace(re, function (a, b) {
			var r = '<img draggable="false"';
			r += (eclass)?' class="'+eclass+'"':'';
			r += (alt)?' alt="'+b+'"':'';
			r += ' src="'+path+toCodePoint(noExtra(b))+'.'+ext+'">';
			return r;
		});
	}

	$.Emoji = function(element, options) {

		var plugin = this,
			$element = $(element),
			element = element,
			defaults = {
				path:'img/apple72/',
				class: 'replace',
				alt: true,
				ext: 'png'
			};
		plugin.settings = {};

		plugin.init = function() {
			plugin.settings = $.extend({}, defaults, options);
			$element.html(parser($element.html(), plugin.settings.path, plugin.settings.alt, plugin.settings.class, plugin.settings.ext));
			
		}
		
		plugin.init();

	}

	$.fn.Emoji = function(options) {
		return this.each(function() {
			if (undefined == $(this).data('Emoji')) {
				var plugin = new $.Emoji(this, options);
				$(this).data('Emoji', plugin);
			}
		});
	}

})(jQuery);
