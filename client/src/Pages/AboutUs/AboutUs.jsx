import React from 'react'
import './AboutUs.css'
import cat1 from './cat1.jpg'
import cat2 from './cat2.jpg'
import dog1 from './dog1.jpg'
import dog2 from './dog2.jpg'
function AboutUs() {
  return (
    <div>

      <section class="about">
        <div class="main">

          <div class="about-text">
            <h1>About Us</h1>

            <p>


              At Home is an adoption website that connects animals in need with the right people. Based online, we work as an independent third party between those looking to rehome an animal and those wishing to adopt, foster or sponsor an animal.

              Launched in May 2024, Leaf Animals is the first and only animal adoption website in Egypt. Using an extensive and thorough process for animal adoption, fostering and sponsorship, we prioritise successful and lifelong matches between humans and animals.

              Leaf Animals also functions as an informal educational platform that aims to spread awareness on all issues related to animal welfare, well-being and care.</p>

          </div>
          <img src={dog1}></img>
        </div>
      </section>

      <section class="founders">
        <div class="main">
          <img src={cat2}></img>
          <div class="about-text">
            <h1>Our Founders</h1>

            <p>


              Meet Sohaila Abuhamad and Mohamed Tarek, the dynamic duo behind At Home. Sohaila's passion for animals and expertise in web development, coupled with Mohamed's dedication to animal welfare and entrepreneurial drive, form the cornerstone of our platform. Together, they have crafted At Home into a trusted space where pets and loving families unite. Their shared vision fuels our mission to simplify pet adoption, ensuring that every pet finds a loving home and every adopter finds a faithful companion.</p>

          </div>
        </div>
      </section>
      <section class="vision">
        <div class="main">

          <div class="about-text">
            <h1>Our Vision</h1>

            <p>

              We envision a reality where animals' instinctual needs are respected and their lives are valued beyond serving a human purpose.

              In order to realise this vision, we seek a cultural shift and a change in mindset where animal welfare becomes a priority. This includes animals in homes and those that are free roaming and/or wild.

              At the heart of our vision is a belief in force free, positivity motivated practices and abiding by research driven methods and standards.</p>

          </div>
          <img src={dog2}></img>
        </div>
      </section>

      <section class="mission">
        <div class="main">
          <img src={cat1}></img>
          <div class="about-text">
            <h1>Our Mission</h1>

            <p>
At Homes's mission is to improve animal welfare both in Egypt and beyond. Education is a major component in achieving our goal and we've placed it at the forefront of our work.

Our website is designed to accelerate successful adoptions, as well as to encourage fostering and animal sponsorship. We want to further use our platform to generate awareness and provide useful information.</p>

          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutUs