console.log('JS is still working!');

let posts = [
  {
    text: "We’re livestreaming our show from Moody Amphitheater on April 8th during the TOTAL SOLAR ECLIPSE and you can watch LIVE at 12pm CT at the link in bio.",
    username: 'vampireweekend',
    likeCount: 14384,
    photoPath: './images/vampireweekend.jpeg'

  },
  {
    text: "Thank you for hand-printing these little cloth banners, oh activists of Hawai’i! Love & miss you all! #worldwideoutcry#freedom#deoccupy#beatitinvaders",
    username: 'nshibah2018',
    likeCount: 1269,
    photoPath: './images/freepalestine.jpeg'
  },
  {
    text: `We take a lot of pride in carrying fun, unique and a wide variety of brands, especially the ones that align with our values. Patagonia was a no brainer to add to our ever growing brands list. ⁠The adventure pieces that Patagonia offers line up well with our bike packing/gravel/mountain bike vibes. We've recently brought in MTB shorts, MTB jersey's, All-weather jackets, casual wear, hydration backpack and a heavily requested liner shorts(we finally have short liners!)⁠`,
    username: 'angrycatfish',
    likeCount: 91,
    photoPath: './images/angrycatfishguy.jpeg'
  }
]

function renderPosts(somePosts) {
  // Loop through somePosts:
  for (let aPost of somePosts) {
    let postList = document.getElementById('post-list');
    // Render a <li> that includes a post's:
    postList.innerHTML += `
      <li>
        Posted by: ${aPost.username}
        <br/>
        Post text: ${aPost.text}
        <br/>
        Like count: ${aPost.likeCount}
        <img src="${aPost.photoPath}" alt="an instagram picture...very pretty"/>
      </li>
    `
      // username, text, likeCount, photoUrl
  }
}

renderPosts(posts);
