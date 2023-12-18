// all examples of my API
const jarifapi = require('./lib/index');

async function test() {
  try {
    const alldl = await jarifapi.alldl('your video url of ( facebook , instagram or tiktok )');
    console.log(alldl);

    const pgen = await jarifapi.promptgen('cat');
    console.log(pgen);

    const songUrl = await jarifapi.songfind('https://tinyurl.com/ywfflz6m');
    console.log(songUrl);

    const llamaai = await jarifapi.llama('hi');
    console.log(llamaai);

    const mistralai = await jarifapi.mistral('hey');
    console.log(mistralai);

    const lyrics = await jarifapi.lyrics('counting stars');
    console.log(lyrics);

    const v = await jarifapi.vicuna('hi');
    console.log(v);

    const p = await jarifapi.palm('hi');
    console.log(p);

    const sdxl = await jarifapi.sdxl(/* prompt */'sdxl prompt',  /* model number */'sdxl model');
    console.log(sdxl);

    const emojiGif = await jarifapi.emojiGif('😊');
    console.log(emojiGif);

    const mrBeast = await jarifapi.mrbeast('hiiiiiiiiiii');
    console.log(mrBeast);

    const girlTTS1 = await jarifapi.girltts1('hiiiiiiiiiii');
    console.log(girlTTS1);

    const girlTTS2 = await jarifapi.girltts2('hiiiiiiiiiii');
    console.log(girlTTS2);

    const prmptAI = await jarifapi.aiprompt('cat');
    console.log(prmptAI);

    const gpt = await jarifapi.gpt('hello gpt');
    console.log(gpt);

    const insta = await jarifapi.igvideo('vide url');
    console.log(insta);

    const quiz = await jarifapi.quiz();
    console.log(quiz);

    const img2art = await jarifapi.art('your img url', 'art prompt', 'anniejarif');
    console.log(img2art);

    const art = await jarifapi.img2art('your img url with real face');
    console.log(art);

    const linerai = await jarifapi.linerai('hi');
    console.log(linerai);

  } catch (error) {
    console.error(error.message || error);
  }
}

test();
