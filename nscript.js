// document.querySelectorAll('.faq-question').forEach(button => {
//     button.addEventListener('click', () => {
//       const answer = button.nextElementSibling;

//       answer.classList.toggle('open');
//     });
// })

// document.querySelectorAll(".slides").forEach(button => {
//   button.addEventListener('click', () => {
//     const tbox = document.querySelector(".cardinfoCont").children[1]
//     tbox.classList.toggle('openn')
//   })
// })

// slideButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     cardInfos.forEach(info => info.classList.remove("openn"))

//     cardInfos[index]?.classList.add("openn");
//     setTimeout(() => {
//       const iframe = cardInfos[index].querySelector(".poster iframe");

//       if (iframe) {
//         // Set the real src with autoplay=1
//         const srcWithAutoplay = iframe.dataset.src + "&autoplay=1";
//         iframe.src = srcWithAutoplay;

//         // Now show the iframe
//         iframe.classList.toggle("playy");
//       }
//     }, 5000);



//   })
// })

const faqData = [
  {
    question: "What is Netflix?",
    answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
    anime, documentaries and more – on thousands of internet-connected devices.
    <br><br>
    You can watch as much as you want, whenever you want, without a single ad – all for one low
    monthly price. There's always something new to discover, and new TV shows and movies are added
    every week!`
  },
  {
    question: "How much does Netflix cost?",
    answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one
    fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.`
  },
  {
    question: "Where can I watch?",
    answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at
    netflix.com from your personal computer or on any internet-connected device that offers the
    Netflix app, including smart TVs, smartphones, tablets, streaming media players and game
    consoles.
    <br><br>
    You can also download your favourite shows with the iOS or Android app. Use downloads to watch
    while you're on the go and without an internet connection. Take Netflix with you anywhere.`
  },
  {
    question: "How do I cancel?",
    answer: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel
    your account online in two clicks. There are no cancellation fees – start or stop your account
    anytime.`
  },
  {
    question: "What can I watch on Netflix?",
    answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
    Netflix originals, and more. Watch as much as you want, anytime you want.`
  },
  {
    question: "Is Netflix good for kids?",
    answer: `The Netflix Kids experience is included in your membership to give parents control while kids
    enjoy family-friendly TV shows and films in their own space.
    <br><br>
    Kids profiles come with PIN-protected parental controls that let you restrict the maturity
    rating of content kids can watch and block specific titles you don’t want kids to see.`
  }
];


const reasonsData = [
  {
    text: "Cancel or switch plans anytime",
    imgSrc: "images/e2.png",
  },
  {
    text: "A safe place just for kids",
    imgSrc: "images/e1.png",
  },
  {
    text: "Watch on your favourite devices",
    imgSrc: "images/e3.png",
  },
  {
    text: "Stories tailored to your taste",
    imgSrc: "images/e4.png",
  }
];

const cardData = [
  {
    imgSrc: "images/n4.webp",
    videoSrc: "https://www.youtube.com/embed/1ONb0CBbgPQ?controls=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    heading: "2025 - U/A 13+ - Movie - Comedies",
    description: "After a top student faces rejection and heartbreak, he cons his way into a finance career. But keeping up the facade proves tricky as the lies build."
  },
  {
    imgSrc: "images/n3.webp",
    videoSrc: "https://www.youtube.com/embed/MSNL6OIr9kU?controls=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    heading: "2025 - U/A 13+ - Movie - Action",
    description: "As his smuggling empire grows, a brazen Pushpa longs for power and respect on his vengeful journey, while facing old rivals and new."
  },
  {
    imgSrc: "images/n5.webp",
    videoSrc: "https://www.youtube.com/embed/ddbvbH5ff5U?controls=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    heading: "2025 - A - Movie - Thrillers",
    description: "During a routine case for counterfeit jewelry, a demoted police officer unexpectedly steers his investigation toward a dangerous criminal syndicate."
  },
  {
    imgSrc: "images/n7.webp",
    videoSrc: "https://www.youtube.com/embed/XneHBxjMg_Y?controls=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    heading: "2025 - U/A 13+ - Movie - Drama",
    description: "As a righteous cop pursues a merciless criminal in Bihar, he finds himself navigating a deadly chase and a moral battle mired in corruption."
  },
  {
    imgSrc: "images/n6.webp",
    videoSrc: "https://www.youtube.com/embed/Ed1sGgHUo88?controls=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    heading: "2025 - A - Movie - Thrillers",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes."
  },
  {
    imgSrc: "images/n2.webp",
    videoSrc: "https://www.youtube.com/embed/ZWu2jk7IYv0?controls=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    heading: "2025 - A - Drama",
    description: "This dramatic portrayal of the Emergency era in India explores Indira Gandhi's leadership, political oppression and the resulting societal upheaval."
  },
  {
    imgSrc: "images/n1.webp",
    videoSrc: "https://www.youtube.com/embed/DBCy-fo9eSQ?controls=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    heading: "2025 - U/A 16+ - Movie - Thrillers",
    description: "Working on a complicated case, a fierce young police officer goes rogue to dismantle a lethal web of corruption and deceit — one epic battle at a time."
  },
  {
    imgSrc: "images/n8.webp",
    videoSrc: "https://www.youtube.com/embed/I8gFw4-2RBM?controls=1&showinfo=0&modestbranding=1&rel=0&mute=1",
    heading: "2024 - A - Action",
    description: "Following a near-death experience, the son of a crime lord transforms into an animalistic vigilante who delights in hunting the world's worst villains."
  }
];

const footerLinks = [
  ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
  ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
  ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
  ["Media Centre", "Terms of Use", "Contact Us"]
];



//Faq Questions 
let faq = document.querySelector(".num4")
for (let index = 0; index < faqData.length; index++) {
  const e = faqData[index];
  let div = document.createElement('div')
  div.className = "faqbox"
  div.innerHTML += ` 
                      <button class="faq-question">
                          <span> ${e.question}</span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 4V20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              <path d="M4 12H20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round" />
  
                          </svg>
                      </button>
                      <div class="faq-answer">
                        ${e.answer}
                      </div>
                  `
  faq.appendChild(div);



}

let bottomdiv = document.createElement('div')
bottomdiv.className = "bottom-cont"
bottomdiv.innerHTML += `  <span>Ready to watch? Enter your email to create or restart your membership.</span>
                <div class="bottom-but">
                    <input class="navicons secbut1" type="text" placeholder="Email address">
                    <button class="navicons secbut2">Get Started</button>
            </div> `
faq.appendChild(bottomdiv)



document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener('click', () => {
    const ans = button.nextElementSibling;
    // console.log(ans)

    ans.classList.toggle('open');
  });
})


//Reasons Section
let reason = document.querySelector(".reasons")
for (let index = 0; index < reasonsData.length; index++) {
  const e = reasonsData[index];
  let div = document.createElement('div')
  div.innerHTML = `${e.text}
                            <img src="${e.imgSrc}">
                        `

  reason.appendChild(div)

}


//Slides portion - cards
let slides = document.querySelector(".slides")
console.log(slides)
for (let index = 1; index < 9; index++) {
  const e = index;
  let div = document.createElement('div')
  div.className = `card no${e}`
  div.innerHTML = `<span class="rank">${e}</span>`
  slides.appendChild(div)

}

//Slides card dialog boxes
let container = document.querySelector(".cardinfoCont")
for (let index = 0; index < cardData.length; index++) {
  const e = cardData[index];
  let div = document.createElement('div')
  div.className = `cardinfo cardnum${index + 1}`
  div.innerHTML = `
                    <div class="poster"><img src="${e.imgSrc}"> <img src="images/close.svg"> <iframe
                        data-src="${e.videoSrc}" 
                        frameborder="0" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen></iframe></div>
                    <div class="about">
                        <span style="font-size: 16px;font-weight: 500;">${e.heading}</span>
                        <span style="font-size: 14px;">${e.description}</span>
                    </div>
                    <div class="rpbtn">

                        <div class="bottom-but">
                            <input class="navicons secbut1" type="text" placeholder="Email address">
                            <button class="navicons secbut2">Get Started</button>
                        </div>
                    </div>`

  container.appendChild(div)

}

//Slides cards dialog box opener
const cardInfos = document.querySelectorAll(".cardinfo")
const slideButtons = document.querySelectorAll(".card")
let timeoutId;

slideButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    cardInfos.forEach(info => {
      info.classList.remove("openn");
      const oldIframe = info.querySelector(".poster iframe");
      oldIframe.classList.remove('playy');
      oldIframe.src = ""; // Clear iframe immediately
    });

    cardInfos[index]?.classList.add("openn");

    const iframe = cardInfos[index].querySelector(".poster iframe");
    const dataSrc = iframe.dataset.src;
    clearTimeout(timeoutId);
    // Add autoplay only when opening
    iframe.src = `${dataSrc}&autoplay=1`;

    timeoutId = setTimeout(() => {
      iframe.classList.add('playy');
    }, 5000);
  });
});


document.querySelectorAll(".poster img:nth-child(2)").forEach(closeIcon => {
  closeIcon.addEventListener('click', () => {
    const card = closeIcon.closest(".cardinfo")
    const iframe = card.querySelector(".poster iframe");
    card.classList.toggle('openn')
    iframe.classList.remove('playy')
    iframe.src = "";
    clearTimeout(timeoutId);
  })
})

//Footer links
let footitem = document.querySelector(".footer")
for (let index = 0; index < footerLinks.length; index++) {
  const e = footerLinks[index];
  let div = document.createElement('div')
  div.className = "footer-item"
  for (let i = 0; i < e.length; i++) {
    div.innerHTML += ` <a href="faq"><u>${e[i]}</u></a>`
  }
  footitem.appendChild(div)

}