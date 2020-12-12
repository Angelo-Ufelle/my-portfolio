<template>
    <div>
            <nav class="navbar">
                <div class="max-width">
                    <div class="logo"><a href="#home">Azu<span>Onye</span></a></div>
                    <ul class="menu">
                        <li><a href="#home" class="active">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                <div class="menu-btn">
                    <button id="btn">☰</button>
                </div>
                </div>
            </nav>
            <div id="progressbar"></div>
            <div id="scrollPath"></div>
            <!-- home section start -->
            <section class="home" id="home">
                <div class="max-width">
                <div class="try">
                    <div class="me">
                            <img src="../../src/assets//111.png" alt="*">
                        </div>
                    <div class="home-content">
                        <div class="text-1">Hello, my name is</div>
                        <div class="text-2">Azubuike Onyedika</div>
                        <div class="text-3">I'm a 
                        <span class="typing">Web Developer</span>
                        </div><br><br>
                        <button id="bttn"><a href="#contact">Reach Me</a></button>

                    </div>
                </div>
                </div>
                <!-- <div class="overlay"></div>      -->
            </section>
            <!-- about section start -->
            <section class="about" id="about">
                <div class="max-width">
                    <h2 class="title">About Me</h2>
                    <div class="about-content">
                        <div class="column left">
                            <img src="../../src/assets/3.jpg" alt="avatar">
                        </div>
                        <div class="column right">
                            <div class="text">Hi, I'm Onyedika and I'm a <span>Web Developer</span></div>
                            <p>I am a junior developer with an avid interest in coding. I am a student of Unizik, where I study computer science. As a a junior developer I am stil a work in progress and I am still learning about the wonderful world of programming. I am learning to be a full stack developer and also a game developer(which has always been a dream). I am currently a freelancer and am doing various small projects.</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- work section -->
            <section class="work" id="work">
                <div class="max-width">
                    <h2 class="title">My Work</h2>
                    <div class="work-content">
                        <div class="box">
                            <div class="imgBx">
                                <img src="../../src/assets/induko.png" alt="*">
                            </div>
                            <div class="content">
                                <h2>First Practice<br><span>A simple html</span></h2>
                            </div>
                        </div>
                        <div class="box">
                            <div class="imgBx">
                                <img src="../../src/assets/react.png" alt="*">
                            </div>
                            <div class="content">
                                <h2>My First React Practice<br><span>My First Framework</span></h2>
                            </div>
                        </div>
                        <div class="box">
                            <div class="imgBx">
                                <img src="../../src/assets/vue.png" alt="*">
                            </div>
                            <div class="content">
                                <h2>My First Vue Practice<br><span>My Second Framework</span></h2>
                            </div>
                        </div>      
                    </div>
                </div>
            </section>

            <!-- contact section -->
            <section class="contact" id="contact">
                <div class="max-width">
                    <h2 class="title">Contact Me</h2>
                    <div class="contact-content">
                    <div class="column left"> 
                        <h1>Get in Touch</h1>
                        <p>You can reach me via email, whatsapp, github or just send a message</p>
                        <div class="icon">
                            <div class="row">
                                <i class="fas fa-user"></i> 
                                <div class="info">
                                    <div class="head">Name</div>
                                    <div class="sub-title">Azubuike Onyedika</div>
                                </div>   
                            </div>
                            <div class="row">
                                <i class="fas fa-map-marker-alt"></i> 
                                <div class="info">
                                    <div class="head">Address</div>
                                    <div class="sub-title">Awka, Nigeria</div>
                                </div>   
                            </div>
                            <div class="row">
                                <i class="fas fa-envelope"></i> 
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title">onyedikaufelle@gmail.com</div>
                                </div>   
                            </div>
                            <div class="row">
                                <i class="fab fa-github" style="color:black;"></i> 
                                <div class="info">
                                    <div class="head"><a href="https://github.com/Angelo-Ufelle">Github</a></div>
                                    <div class="sub-title">https://github.com/Angelo-Ufelle</div>
                                </div>   
                            </div>
                            <div class="row">
                                <i class="fab fa-whatsapp" style="color:green;"></i> 
                                <div class="info">
                                    <div class="head">Whatsapp</div>
                                    <div class="sub-title">08162611978</div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div class="column right">
                        <div class="wrap" id="wrap">
                            <h1>Send A Message</h1>
                            <br><br><br>
                            <div id="form-wrap">
                                <form>
                                    <p>Hi send a message</p>
                                    <label for="messge">Your Message:</label>
                                    <textarea name="message" id="message" value="Your Message"></textarea>

                                    <p>From,</p>
                                    <label for="name">Name:</label>
                                    <input type="text" name="name" value="" id="name">

                                    <label for="email">Email:</label>
                                    <input type="text" name="email" value="" id="email">

                                    <input type="submit" value="Send" name="submit" class="btnn">
                                </form>
                                </div>
                    </div>
                    </div>
                    </div>
                </div>
            </section>

    </div>
</template>
<script>


export default {
    name: 'Home',
    mounted() {
        let progress = document.getElementById('progressbar');
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function(){
        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + "%";
};
    }
};
</script>
