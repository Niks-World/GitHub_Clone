function navbar(){
    return`
    <div id="logo">
     <a href="index.html">
        <img src="/GitHub_Clone/logo.png" alt="">
     </a>
     </div>
     <div id="search">
     <input type="text" placeholder="search user...." id="nav_input">
     </div>
     <div id="options">
     <a href="#">Pull Request</a>
     <a href="#">Issues</a>
     <a href="#">Codespace</a>
     <a href="#">Marketplace</a>
     <a href="explore.html">Explore</a>
     </div>
     <div id="profile">
      <img id="img_profile" src="/GitHub_Clone/download.jpg" alt="">
    </div>
    `
}

export default navbar;