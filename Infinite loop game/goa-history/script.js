const wrapper = document.querySelector(".text");
const btn = document.querySelector(".my-btn");
const mainText = document.getElementById("text");
const img = document.getElementById("main-img");

let secretCount = 0;
let index = 0;

function createGameButton(text, color, onClickAction, width) {
  const button = document.createElement("button");
  button.innerText = text;

  let buttonWidth = "";
  if (width) {
    buttonWidth = "width: " + width + ";";
  }

  button.style.cssText = `
      padding: 15px 25px;
      background-color: ${color};
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      font-weight: bold;
      transition: transform 0.2s;
      ${buttonWidth}
  `;

  button.onclick = onClickAction;
  return button;
}

function triggerGameOverAnimation() {
  playAudioWithTimer(
    "audio/universfield-game-over-deep-male-voice-clip-352695.mp3",
    2000,
  );

  wrapper.style.color = "red";
  wrapper.style.textShadow = "3px 3px 0px #ff0000, -3px -3px 0px #ff7979";
  wrapper.style.fontSize = "2rem";
  wrapper.style.fontWeight = "bold";
}

function playAudioWithTimer(src, duration) {
  const sound = new Audio(src);
  sound.loop = true;
  sound.volume = 0.5;

  sound.play().catch(function (e) {
    console.log("Audio play failed:", e);
  });

  setTimeout(function () {
    sound.pause();
    sound.currentTime = 0;
    console.log("აუდიო გაითიშა");
  }, duration);
}

function createRestartButton(
  txt = "ცხოვრების თავიდან დაწყება",
  secret = false, // არ მუშაობს
) {
  const restartBtn = createGameButton(txt, "#ff0000", function () {
    location.reload();
  });

  restartBtn.style.position = "absolute";
  restartBtn.style.bottom = "50px";
  restartBtn.style.left = "50%";
  restartBtn.style.transform = "translateX(-50%)";
  restartBtn.style.boxShadow = "0 0 15px rgba(0, 123, 255, 0.5)";

  document.body.appendChild(restartBtn);

  restartBtn.style.opacity = 0;
  anime({
    targets: restartBtn,
    opacity: [0, 1],
    bottom: [30, 50],
    duration: 800,
    easing: "easeOutExpo",
  });
}

function loopAnimation(
  textArr,
  startDuration,
  endDuration,
  waitingTime,
  onComplete,
) {
  if (!startDuration) startDuration = 950;
  if (!endDuration) endDuration = 400;
  if (!waitingTime) waitingTime = 600;

  if (index >= textArr.length) {
    index = 0;
  }

  const words = textArr;
  const currentWord = words[index] || words[0];

  if (currentWord === "GAME OVER!!") {
    triggerGameOverAnimation();
  }

  wrapper.innerHTML = "";
  wrapper.style.display = "block";
  wrapper.style.textAlign = "center";

  const letters = currentWord.split("");

  for (let i = 0; i < letters.length; i++) {
    const span = document.createElement("span");
    span.textContent = letters[i];
    span.className = "letter";
    if (letters[i] === " ") span.innerHTML = "&nbsp;";
    wrapper.appendChild(span);
  }

  anime({
    targets: ".text .letter",
    scale: [4, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: startDuration,
    delay: function (el, i) {
      return 35 * i;
    },

    complete: function () {
      if (index === words.length - 1) {
        setTimeout(function () {
          if (onComplete) {
            onComplete();
          }
        }, waitingTime);

        if (btn.style.display !== "none") {
          setTimeout(function () {
            btn.style.pointerEvents = "auto";
            anime({
              targets: ".my-btn",
              opacity: [0, 1],
              translateY: [20, 0],
              easing: "easeOutExpo",
              duration: 800,
            });
          }, 1000);
        }
        return;
      }

      setTimeout(function () {
        anime({
          targets: ".text .letter",
          opacity: 0,
          duration: endDuration,
          easing: "easeInExpo",
          delay: function (el, i) {
            return 10 * i;
          },
          complete: function () {
            index++;
            loopAnimation(
              words,
              startDuration,
              endDuration,
              waitingTime,
              onComplete,
            );
          },
        });
      }, waitingTime);
    },
  });
}

index = 0;
loopAnimation(["მოგესალმები", "თქვენ მოხვდით უსასრულო ლუპში"]);

function showChoiceButtons() {
  const container = document.createElement("div");

  container.style.cssText = `
    display: flex; 
    gap: 20px; 
    opacity: 0; 
    justify-content: center;
    position: absolute; 
    bottom: 50px; 
    left: 0; 
    width: 100%;
    z-index: 1000;
  `;

  const btnGoa = createGameButton("შესვლა GOA-ში", "#28a745", function () {
    if (img) img.src = "img/GOA.png";
    container.style.display = "none";
    wrapper.style.display = "block";
    wrapper.style.color = "#f0e5db";
    wrapper.style.fontSize = "2.5rem";
    wrapper.style.marginBottom = "300px";

    index = 0;
    loopAnimation(["აირჩიე შენი გზა"], 40, 100, 1000, act2);

    function act2() {
      const act2Container = document.createElement("div");
      act2Container.style.cssText = `
        display: flex; 
        gap: 500px; 
        opacity: 0; 
        justify-content: center;
        position: absolute; 
        bottom: 150px; 
        left: 0; 
        width: 100%;
        z-index: 1000;
      `;

      const goodLearn = createGameButton(
        "ჩადურად სწავლა",
        "#28a745",
        function () {
          act2Container.style.display = "none";
          img.src = "img/class.png";

          mainText.style.cssText = `
          font-size: 1em;
          width: 900px;
          margin: 20px 20px;
          color: white;
          text-align: end;
          background-color: rgba(0, 0, 0, 0.418);
          border-radius: 10px;
          box-shadow: 0px 0px 25px rgba(151, 65, 252, 0.2);
          padding: 10px 10px;
        `;
          document.body.style.cssText = `
          justify-content: start;
          align-items: end;
        `;

          playAudioWithTimer("audio/bla.mp3", 15000);

          index = 0;
          loopAnimation(
            [
              //"ss",
              " GOA-ს აკადემიაში ჩაბარებისას ვიცოდი, რომ ეს ნაბიჯი ჩემს მომავალს შეცვლიდა, ამიტომ პირველივე დღიდან აქტიურად ვსწავლობდი. არცერთ დავალებას ვტოვებდი უყურადღებოდ, რადგან მჯეროდა, რომ დისციპლინა წარმატების საწინდარია. მენტორების დახმარებით რთული მასალა მარტივად ავითვისე და რეიტინგებშიც მალევე დავწინაურდი. ამ შედეგმა საკუთარი თავის რწმენა გამიორმაგა. ახლა ვხვდები, რომ აკადემიაში გატარებული დრო ჩემი პროფესიული ზრდისთვის გადამწყვეტი იყო. რას იზავ შენ?",
            ],
            40,
            100,
            1000,
            showMentorLeaderBtns,
          );

          function startHackathonQuiz(eazy) {
            wrapper.innerHTML = "";

            const quizContainer = document.createElement("div");
            quizContainer.style.cssText = `
                display: flex; 
                flex-direction: column;
                align-items: center;
                gap: 20px; 
                position: absolute; 
                bottom: 250px; 
                left: 0; 
                width: 100%;
                z-index: 1000;
            `;

            const questionText = document.createElement("p");
            questionText.style.cssText =
              "color: white; font-size: 24px; text-align: center; margin-bottom: 20px; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 10px;";
            quizContainer.appendChild(questionText);

            const buttonsDiv = document.createElement("div");
            buttonsDiv.style.cssText = "display: flex; gap: 20px;";
            quizContainer.appendChild(buttonsDiv);

            document.body.appendChild(quizContainer);

            const questions = [
              {
                q: "შეგვიძლია თუ არა const ცვლადის მნიშვნელობის შეცვლა?",
                a1: "კი",
                a2: "არა",
                correct: 2,
              },
              {
                q: "რას აბრუნებს [] == 0 ?",
                a1: "true",
                a2: "false",
                correct: 1,
              },
              { q: "რას აბრუნებს 2 + '2' ?", a1: "4", a2: "22", correct: 2 },
              {
                q: "არის თუ არა JavaScript კომპილირებადი ენა?",
                a1: "კი",
                a2: "არა",
                correct: 2,
              },
              {
                q: "რას აბრუნებს typeof null ?",
                a1: "null",
                a2: "object",
                correct: 2,
              },
            ];

            let currentQIndex = 0;
            let score = 0;

            const btn1 = createGameButton(
              "",
              "#007bff",
              function () {
                checkAnswer(1);
              },
              "200px",
            );
            const btn2 = createGameButton(
              "",
              "#dc3545",
              function () {
                checkAnswer(2);
              },
              "200px",
            );

            buttonsDiv.appendChild(btn1);
            buttonsDiv.appendChild(btn2);

            function checkAnswer(selectedOption) {
              if (selectedOption === questions[currentQIndex].correct) {
                score++;
              }
              currentQIndex++;
              loadQuestion();
            }

            function loadQuestion() {
              if (currentQIndex < questions.length) {
                questionText.innerText = questions[currentQIndex].q;
                btn1.innerText = questions[currentQIndex].a1;
                btn2.innerText = questions[currentQIndex].a2;
              } else {
                quizContainer.style.display = "none";
                let place = 6 - score;

                index = 0;
                loopAnimation(
                  [
                    "შენ დაასრულე გამოცდა!",
                    "შენი შედეგის მიხედვით...",
                    "შენ გახვედი " + place + " ადგილზე",
                  ],
                  40,
                  100,
                  1000,
                  function () {
                    if (eazy) {
                      loopAnimation(
                        ["ახლა გინდა გახდე ლიდერი"],
                        40,
                        100,
                        700,
                        function () {
                          createEndChoice("ლიდერი", "მინი ლიდერი");
                        },
                      );
                    } else {
                      loopAnimation(
                        ["ახლა გინდა გახდი მენტორი"],
                        40,
                        100,
                        1000,
                        function () {
                          createEndChoice("მენტორი", "მენტორ ასისტენტი");
                        },
                      );
                    }
                  },
                );
              }
            }

            function createEndChoice(roleName, miniRoleName) {
              const endChoiceContainer = document.createElement("div");
              endChoiceContainer.style.cssText = `
                display: flex; gap: 50px; opacity: 0; justify-content: center;
                position: absolute; bottom: 350px; left: 0; width: 100%; z-index: 1000;
              `;

              const yesBtn = createGameButton(
                "კი",
                "#007bff",
                function () {
                  endChoiceContainer.style.display = "none";
                  index = 0;
                  loopAnimation(
                    [
                      "კარგი გადაწყვეტილებაა",
                      `მაგრამ სანამ ${roleName} გახდები ჯერ ${miniRoleName} უნდა იყო`,
                    ],
                    40,
                    100,
                    1000,
                    function () {
                      index = 0;
                      loopAnimation(
                        [
                          `რადგანაც შენ ${miniRoleName} გახდი`,
                          `შენ ახლა გახდები ${roleName}`,
                        ],
                        40,
                        100,
                        1000,
                        function () {
                          index = 0;
                          loopAnimation(
                            [
                              "შენ ყველანაირი დაბრკოლება   გადალახე",
                              "გახდი მინი-ლიდერი, ლიდერი, მენტორ-ასისტენტი, შემდგომ კი მენტორი",
                              "ეს  ბევრი შრომის შედეგია",
                              "გილოცავ",
                              "შენ ეს შეძელი, თვით ნიკა კეშელავა ჩაანაცვლე!!",
                            ],
                            40,
                            100,
                            1000,
                            function () {
                              if (img) img.src = "img/change_boss.png";

                              playAudioWithTimer(
                                "audio/ribhavagrawal-a-man-sobbing-type-2-265500.mp3",
                                8000,
                              );

                              createRestartButton(
                                "ახლა შეგიძლია რეინკარნაცია განიცადო",
                                true,
                              );
                            },
                          );
                        },
                      );
                    },
                  );
                },
                "150px",
              );

              const noBtn = createGameButton(
                "არა",
                "#007bff",
                function () {
                  endChoiceContainer.style.display = "none";
                  index = 0;
                  loopAnimation(
                    [
                      "შეგვეშალა აქ კი უნდა ყოფილიყო sorry",
                      `ამიტომაც ჯერ ${miniRoleName} გახდები:)`,
                    ],
                    40,
                    100,
                    1000,
                    function () {
                      index = 0;
                      loopAnimation(
                        [
                          `რადგანაც შენ ${miniRoleName} გახდი`,
                          `შენ ახლა გახდები ${roleName}`,
                        ],
                        40,
                        100,
                        1000,
                        function () {
                          index = 0;
                          loopAnimation(
                            [
                              "გილოცავ",
                              "შენ იმდენად მაგარი გახდი რომ",
                              "თვით ნიკა კეშელავა ჩაანაცვლე",
                              "შენ ცხოვრებაში უკვე ყველაფერს მიაღწიე",
                            ],
                            40,
                            100,
                            1000,
                            function () {
                              if (img) img.src = "img/change_boss.png";

                              playAudioWithTimer(
                                "audio/ribhavagrawal-a-man-sobbing-type-2-265500.mp3",
                                8000,
                              );

                              createRestartButton(
                                "ახლა შეგიძლია რეინკარნაცია განიცადო",
                                true,
                              );
                            },
                          );
                        },
                      );
                    },
                  );
                },
                "150px",
              );

              endChoiceContainer.appendChild(yesBtn);
              endChoiceContainer.appendChild(noBtn);
              document.body.appendChild(endChoiceContainer);

              anime({
                targets: endChoiceContainer,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 1000,
              });
            }

            loadQuestion();
          }

          function showMentorLeaderBtns() {
            let beMnetorOrLidder = document.createElement("div");
            beMnetorOrLidder.style.cssText = `
            display: flex; 
            gap: 0px; 
            opacity: 0;
            flex-direction: column;
            justify-content: end;
            align-items: end;
            position: absolute; 
            top: 150px; 
            right: 0px; 
            width: 100%;
            z-index: 1000;
            padding-right: 20px;
          `;

            const beMentor = createGameButton(
              "გავხდე მენტორი",
              "#ffc107",
              function () {
                beMnetorOrLidder.style.display = "none";
                index = 0;
                loopAnimation(
                  ["დარწმუნებული ხააარ?"],
                  40,
                  100,
                  1000,
                  showConfirm,
                );

                function showConfirm() {
                  let becomeMentro = document.createElement("div");
                  becomeMentro.style.cssText = `
                display: flex; 
                gap: 50px; 
                opacity: 0; 
                justify-content: center;
                position: absolute; 
                bottom: 350px; 
                left: 0; 
                width: 100%;
                z-index: 1000;
              `;

                  const yes = createGameButton(
                    "კი",
                    "#28a745",
                    function () {
                      becomeMentro.style.display = "none";
                      wrapper.style.display = "none";

                      index = 0;
                      loopAnimation(
                        [
                          "შენ გაკეთე სწორი გადაწყვეტილება",
                          "მაგრამ სანამ მენტორი გახდები ჯერ მენტორ ასისტენტი იქნები",
                          "ახლა გინდა გახდე მენტორი",
                        ],
                        40,
                        100,
                        1000,
                        showAssistantChoice,
                      );

                      function showAssistantChoice() {
                        let becomeMentorOrNo = document.createElement("div");
                        becomeMentorOrNo.style.cssText = `
                    display: flex; 
                    gap: 50px; 
                    opacity: 0; 
                    justify-content: center;
                    position: absolute; 
                    bottom: 350px; 
                    left: 0; 
                    width: 100%;
                    z-index: 1000;
                  `;

                        const bement = createGameButton(
                          "კი",
                          "#dc3545",
                          function () {
                            becomeMentorOrNo.style.display = "none";
                            index = 0;
                            loopAnimation(
                              [
                                "კარგი გადაწყვეტილებაა შენ ახლა გახდი მენტორი",
                                "შენ ახლა გაქ არჩევანი გახდე ლიდერი ან წახვიდე ჰაკათონზე",
                                "ჰაკათონის მერე ისევ შეძლებ ლიდერი გახდე",
                              ],
                              40,
                              100,
                              1000,
                              showLeaderOrHackathon,
                            );

                            function showLeaderOrHackathon() {
                              let hakatonOrLider =
                                document.createElement("div");
                              hakatonOrLider.style.cssText = `
                        display: flex; 
                        gap: 50px; 
                        opacity: 0; 
                        justify-content: center;
                        position: absolute; 
                        bottom: 350px; 
                        left: 0; 
                        width: 100%;
                        z-index: 1000;
                      `;

                              const becomelid = createGameButton(
                                "გავხდე ლიდერი",
                                "#dc3545",
                                function () {
                                  hakatonOrLider.style.display = "none";

                                  index = 0;
                                  loopAnimation(
                                    [
                                      "კარგი გადაწყვეტილებაა",
                                      "მაგრან სამან ლიდერი გახდები ჯერ მინი ლიდერი უნდა იყო",
                                    ],
                                    400,
                                    100,
                                    500,
                                    function () {
                                      index = 0;
                                      loopAnimation(
                                        [
                                          "რადგანაც შენ მინი ლიდერი გახდი",
                                          "შენ ახლა გახდები ლიდერი",
                                        ],
                                        400,
                                        100,
                                        500,
                                        function () {
                                          index = 0;
                                          loopAnimation(
                                            [
                                              "შენ დროთა განმავლობაშ ბევრ  მოსწავლეს დაეხმარე,",
                                              "გაკვეთილის ჩატარებაც კი შეძელი  დამოუკიდეებლად, ისე რომ ყველას  ჩართული ჰქონდა კამერა",
                                              "ამიტომ....,",
                                              "გილოცავ!!!!!!!!+100010  aura",
                                              "შენ თვით კეშელავა ჩაანაცვლე ",
                                            ],
                                            600,
                                            100,
                                            1000,
                                            function () {
                                              img.src = "img/change_boss.png";

                                              playAudioWithTimer(
                                                "audio/ribhavagrawal-a-man-sobbing-type-2-265500.mp3",
                                                8000,
                                              );

                                              createRestartButton(
                                                "ახალ შეგიძლია რეინკარნაცია განიცადო",
                                                true,
                                              );
                                            },
                                          );
                                        },
                                      );
                                    },
                                  );
                                },
                                "150px",
                              );

                              const hakaton = createGameButton(
                                "წავიდე ჰაკათონზე",
                                "#dc3545",
                                function () {
                                  hakatonOrLider.style.display = "none";
                                  img.src = "img/hackhaton.png";
                                  index = 0;
                                  loopAnimation(
                                    [
                                      "შენ მიხვედი ჰაკათონზე",
                                      "ახლა დროა შევამოწმოთ შენი ცოდნა",
                                    ],
                                    40,
                                    100,
                                    1000,
                                    function () {
                                      startHackathonQuiz(true);
                                    },
                                  );
                                },
                                "150px",
                              );

                              const refuse = createGameButton(
                                "მენტორი დავრჩები",
                                "#dc3545",
                                function () {
                                  hakatonOrLider.style.display = "none";
                                  index = 0;
                                  loopAnimation(
                                    [
                                      "გასაგებია, შენ ამ  ეტაპზე დარჩი მენტორი",
                                      "შენ დიდი დრო დახარჯე",
                                      "და დიდი მონდომების სწავლობდი და პარალელურად სხვებსაც ასწავლიდი",
                                      "ამიტომაც შენ თვით გაბრილ მოლოდინი ჩაანაცვლე",
                                    ],
                                    200,
                                    100,
                                    500,
                                    function () {
                                      img.src = "img/gabrielRetiring.png";

                                      playAudioWithTimer(
                                        "audio/angryGoga.mp3",
                                        6000,
                                      );

                                      createRestartButton(
                                        "ახალ შეგიძლია რეინკარნაცია განიცადო",
                                        true,
                                      );
                                    },
                                  );
                                },
                                "150px",
                              );

                              hakatonOrLider.appendChild(becomelid);
                              hakatonOrLider.appendChild(hakaton);
                              hakatonOrLider.appendChild(refuse);
                              document.body.appendChild(hakatonOrLider);

                              anime({
                                targets: hakatonOrLider,
                                opacity: [0, 1],
                                translateY: [20, 0],
                                duration: 1000,
                              });
                            }
                          },
                          "150px",
                        );

                        const notbement = createGameButton(
                          "არა",
                          "#dc3545",
                          function () {
                            becomeMentorOrNo.style.display = "none";
                            index = 0;
                            loopAnimation(
                              [
                                "ცუდია, ცუდია, ცუდიაა ",
                                "შენ არ მოგინდა მენტორი გამხდარიყავი",
                                "ამიტომაც დაისჯები და",
                                "ცხოვრებას თავიდან დაიწყებ",
                              ],
                              40,
                              100,
                              1000,
                              function () {
                                createRestartButton();
                              },
                            );
                          },
                          "150px",
                        );

                        becomeMentorOrNo.appendChild(bement);
                        becomeMentorOrNo.appendChild(notbement);
                        document.body.appendChild(becomeMentorOrNo);

                        anime({
                          targets: becomeMentorOrNo,
                          opacity: [0, 1],
                          translateY: [20, 0],
                          duration: 1000,
                        });
                      }
                    },
                    "150px",
                  );

                  const no = createGameButton(
                    "არა",
                    "#dc3545",
                    function () {
                      becomeMentro.style.display = "none";
                      wrapper.style.display = "none";
                      img.src =
                        "img/Gemini_Generated_Image_vuwzo2vuwzo2vuwz.png";
                      playAudioWithTimer(
                        "audio/sspsurvival-toilet-bowl-flush-toilet-bowl-flush-toilet-water-12430.mp3",
                        8000,
                      );

                      index = 0;
                      loopAnimation(
                        ["შენ ჩარეცხე შენი ნიჭი"],
                        40,
                        100,
                        600,
                        function () {
                          createRestartButton();
                        },
                      );
                    },
                    "150px",
                  );

                  becomeMentro.appendChild(yes);
                  becomeMentro.appendChild(no);
                  document.body.appendChild(becomeMentro);

                  anime({
                    targets: becomeMentro,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 1000,
                  });
                }
              },
              "200px",
            );

            const beLider = createGameButton(
              "გავხდე ლიდერი",
              "#ffc107",
              function () {
                beMnetorOrLidder.style.display = "none";

                index = 0;
                loopAnimation(
                  ["დარწმუნებული ხააარ?"],
                  40,
                  100,
                  1000,
                  showConfirmLeader,
                );

                function showConfirmLeader() {
                  let becomeLiderDiv = document.createElement("div");
                  becomeLiderDiv.style.cssText = `
                display: flex; 
                gap: 50px; 
                opacity: 0; 
                justify-content: center;
                position: absolute; 
                bottom: 350px; 
                left: 0; 
                width: 100%;
                z-index: 1000;
              `;

                  const yes = createGameButton(
                    "კი",
                    "#28a745",
                    function () {
                      becomeLiderDiv.style.display = "none";
                      wrapper.style.display = "none";

                      index = 0;
                      loopAnimation(
                        [
                          "შენ გაკეთე სწორი გადაწყვეტილება",
                          "მაგრამ სანამ ლიდერი გახდები ჯერ მინი ლიდერი იქნები",
                          "ახლა გინდა გახდე ლიდერი",
                        ],
                        40,
                        100,
                        1000,
                        showMiniLeaderChoice,
                      );

                      function showMiniLeaderChoice() {
                        let miniLeaderDiv = document.createElement("div");
                        miniLeaderDiv.style.cssText = `
                      display: flex; 
                      gap: 50px; 
                      opacity: 0; 
                      justify-content: center;
                      position: absolute; 
                      bottom: 350px; 
                      left: 0; 
                      width: 100%;
                      z-index: 1000;
                    `;

                        const beMini = createGameButton(
                          "კი",
                          "#dc3545",
                          function () {
                            miniLeaderDiv.style.display = "none";

                            index = 0;
                            loopAnimation(
                              [
                                "კარგი გადაწყვეტილებაა შენ ახლა გახდი ლიდერი",
                                "შენ ახლა გაქ არჩევანი გახდე მენტორი ან წახვიდე ჰაკათონზე",
                                "ჰაკათონის მერე ისევ შეძლებ მენტორი გახდე",
                              ],
                              40,
                              100,
                              1000,
                              showMentorOrHackathon,
                            );

                            function showMentorOrHackathon() {
                              let hakatonOrMentor =
                                document.createElement("div");
                              hakatonOrMentor.style.cssText = `
                            display: flex; 
                            gap: 50px; 
                            opacity: 0; 
                            justify-content: center;
                            position: absolute; 
                            bottom: 350px; 
                            left: 0; 
                            width: 100%;
                            z-index: 1000;
                          `;

                              const becomeMent = createGameButton(
                                "გავხდე მენტორი",
                                "#dc3545",
                                function () {
                                  hakatonOrMentor.style.display = "none";

                                  index = 0;
                                  loopAnimation(
                                    [
                                      "კარგი გადაწყვეტილებაა",
                                      "მაგრან სამან მენტორი გახდები ჯერ მენტორ ასისტენტი უნდა იყო",
                                    ],
                                    500,
                                    100,
                                    600,
                                    function () {
                                      index = 0;
                                      loopAnimation(
                                        [
                                          "რადგანაც შენ ნელ-ნელა მენტორ ასისტენტი გახდი",
                                          "შენ ახლა დამსაახურებულად  გახდები მენტორი",
                                        ],
                                        500,
                                        100,
                                        800,
                                        function () {
                                          index = 0;
                                          loopAnimation(
                                            [
                                              "ამისთვის დიდი დრო და ზალისხმება დაგჭირდა,",
                                              "შენ დაუღალავად სწავლობდი, წერდი კოდს, ეხმარებოდი მოსწავლეებს",
                                              "ღამე კი ბაკურიანში მიდიოდი და თხილამურებით სალტოებს აკეთებდი",
                                              "გილოცავ",
                                              "შეენ თვით კეშელავა ჩაანაცვლე ",
                                              "+10000aura",
                                            ],
                                            100,
                                            100,
                                            1000,
                                            function () {
                                              img.src = "img/change_boss.png";

                                              playAudioWithTimer(
                                                "audio/ribhavagrawal-a-man-sobbing-type-2-265500.mp3",
                                                8000,
                                              );

                                              createRestartButton(
                                                "ახალ შეგიძლია რეინკარნაცია განიცადო",
                                                true,
                                              );
                                            },
                                          );
                                        },
                                      );
                                    },
                                  );
                                },
                                "150px",
                              );

                              const hakaton = createGameButton(
                                "წავიდე ჰაკათონზე",
                                "#dc3545",
                                function () {
                                  hakatonOrMentor.style.display = "none";
                                  img.src = "img/hackhaton.png";
                                  index = 0;
                                  loopAnimation(
                                    [
                                      "შენ მიხვედი ჰაკათონზე",
                                      "ახლა დროა შევამოწმოთ შენი ცოდნა",
                                    ],
                                    40,
                                    100,
                                    1000,
                                    function () {
                                      startHackathonQuiz(false);
                                    },
                                  );
                                },
                                "150px",
                              );

                              const refuse = createGameButton(
                                "ლიდერი დავრჩები",
                                "#dc3545",
                                function () {
                                  hakatonOrMentor.style.display = "none";
                                  index = 0;
                                  loopAnimation(
                                    [
                                      "გასაგებია, შენ ამ  ეტაპზე დარჩი ლიდერად",
                                      "შენ დიდი დრო დახარჯე",
                                      "და დიდი მონდომების სწავლობდი და სხვებს ასწავლიდი",
                                      "ამიტომაც შენ თვით გოგა ჩლაური ჩაანაცვლე",
                                    ],
                                    200,
                                    100,
                                    500,
                                    function () {
                                      img.src = "img/gogaRetired.png";

                                      playAudioWithTimer(
                                        "audio/angryGoga.mp3",
                                        6000,
                                      );

                                      createRestartButton(
                                        "ახალ შეგიძლია რეინკარნაცია განიცადო",
                                        true,
                                      );
                                    },
                                  );
                                },
                                "150px",
                              );

                              hakatonOrMentor.appendChild(becomeMent);
                              hakatonOrMentor.appendChild(hakaton);
                              hakatonOrMentor.appendChild(refuse);
                              document.body.appendChild(hakatonOrMentor);

                              anime({
                                targets: hakatonOrMentor,
                                opacity: [0, 1],
                                translateY: [20, 0],
                                duration: 1000,
                              });
                            }
                          },
                          "150px",
                        );

                        const notMini = createGameButton(
                          "არა",
                          "#dc3545",
                          function () {
                            miniLeaderDiv.style.display = "none";
                            index = 0;
                            loopAnimation(
                              [
                                "ცუდია რომ არ მოგინდა ლიდერი გამხდარიყავი",
                                "ამიტომაც დაისჯები და",
                                "ცხოვრებას თავიდან დაიწყებ!!!",
                              ],
                              40,
                              100,
                              1000,
                              function () {
                                createRestartButton();
                              },
                            );
                          },
                          "150px",
                        );

                        miniLeaderDiv.appendChild(beMini);
                        miniLeaderDiv.appendChild(notMini);
                        document.body.appendChild(miniLeaderDiv);

                        anime({
                          targets: miniLeaderDiv,
                          opacity: [0, 1],
                          translateY: [20, 0],
                          duration: 1000,
                        });
                      }
                    },
                    "150px",
                  );

                  const no = createGameButton(
                    "არა",
                    "#dc3545",
                    function () {
                      becomeLiderDiv.style.display = "none";
                      wrapper.style.display = "none";
                      img.src =
                        "img/Gemini_Generated_Image_vuwzo2vuwzo2vuwz.png";
                      playAudioWithTimer(
                        "audio/sspsurvival-toilet-bowl-flush-toilet-bowl-flush-toilet-water-12430.mp3",
                        8000,
                      );

                      index = 0;
                      loopAnimation(
                        ["შენ ჩარეცხე შენი ნიჭი"],
                        40,
                        100,
                        600,
                        function () {
                          createRestartButton();
                        },
                      );
                    },
                    "150px",
                  );

                  becomeLiderDiv.appendChild(yes);
                  becomeLiderDiv.appendChild(no);
                  document.body.appendChild(becomeLiderDiv);

                  anime({
                    targets: becomeLiderDiv,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 1000,
                  });
                }
              },
              "200px",
            );

            beMnetorOrLidder.appendChild(beMentor);
            beMnetorOrLidder.appendChild(beLider);
            document.body.appendChild(beMnetorOrLidder);

            anime({
              targets: beMnetorOrLidder,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 1000,
            });
          }
        },
      );

      const bedLearn = createGameButton(
        "ზერელე სწავლა",
        "#ffc107",
        function () {
          img.src = "img/angry.png";
          act2Container.style.display = "none";
          playAudioWithTimer("audio/luse.mp3", 6000);
          wrapper.style.marginBottom = "0px";
          wrapper.style.color = "white";

          index = 0;
          loopAnimation(
            ["შენ ახლა გაქ 2 ვარიანტი"],
            40,
            100,
            1000,
            act2LuseChoise,
          );

          function act2LuseChoise() {
            const act2LuseChoiseConteriner = document.createElement("div");
            act2LuseChoiseConteriner.style.cssText = `
            display: flex; 
            gap: 500px; 
            opacity: 0; 
            justify-content: center;
            position: absolute; 
            bottom: 150px; 
            left: 0; 
            width: 100%;
            z-index: 1000;
          `;

            const act2LuseChoiseBed = createGameButton(
              "ზარმაცობა",
              "#dc3545",
              function () {
                act2LuseChoiseConteriner.style.display = "none";
                img.src = "img/opened.png";

                triggerGameOverAnimation();

                index = 0;
                loopAnimation(
                  ["შენ", "აირჩიე", "გზა", "ლუზერებისკენ", "GAME OVER!!"],
                  300,
                  200,
                  200,
                  function () {
                    createRestartButton();
                  },
                );
              },
            );

            const act2LuseChoiseGood = createGameButton(
              "სხვა პროფესიის პოვნა",
              "#ffc107",
              function () {
                function findeprof() {
                  let life = Math.floor(Math.random() * 3);
                  if (life != 1) {
                    act2LuseChoiseConteriner.style.display = "none";
                    img.src = "img/opened.png";

                    triggerGameOverAnimation();

                    index = 0;
                    loopAnimation(
                      [
                        "შენ",
                        "არ",
                        "გაგიმართლა",
                        "და",
                        "სამსახური",
                        "ვერ",
                        "იპოვე",
                      ],
                      300,
                      200,
                      200,
                      function () {
                        createRestartButton();
                      },
                    );
                  } else if (life == 1) {
                    act2LuseChoiseConteriner.style.display = "none";
                    wrapper.style.fontSize = "1.18rem";
                    img.src = "img/opened.png";

                    index = 0;
                    loopAnimation(
                      [
                        "შენ იპოვე პროფესია მაგრამ რადგანაც GOA-ში ზარმაცობდი დიდი ანაზღაურება არ გქონდა ამიტომა შენ გახდი სამინისტროს მონა, YOU ARE STUCK IN MATRIX!",
                      ],
                      300,
                      200,
                      200,
                      function () {
                        createRestartButton();
                      },
                    );
                  }
                }
                findeprof();
              },
            );

            act2LuseChoiseConteriner.appendChild(act2LuseChoiseBed);
            act2LuseChoiseConteriner.appendChild(act2LuseChoiseGood);
            document.body.appendChild(act2LuseChoiseConteriner);

            anime({
              targets: act2LuseChoiseConteriner,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 1000,
            });
          }
        },
      );

      act2Container.appendChild(goodLearn);
      act2Container.appendChild(bedLearn);
      document.body.appendChild(act2Container);

      anime({
        targets: act2Container,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
      });
    }
  });

  const btnRoblox = createGameButton(
    "არმცალია, Roblox-ი მელოდება",
    "#dc3545",
    function () {
      container.style.display = "none";

      triggerGameOverAnimation();

      index = 0;
      loopAnimation(
        ["შენ", "აირჩიე", "გზა", "ლუზერებისკენ", "GAME OVER!!"],
        300,
        200,
        200,
        function () {
          createRestartButton();
        },
      );
    },
  );

  container.appendChild(btnGoa);
  container.appendChild(btnRoblox);
  document.body.appendChild(container);

  anime({
    targets: container,
    opacity: [0, 1],
    translateY: [20, 0],
    easing: "easeOutExpo",
    duration: 1000,
  });
}

btn.addEventListener("click", function () {
  btn.style.display = "none";
  if (img) img.src = "img/opened.png";

  mainText.style.width = "700px";
  mainText.style.fontSize = "18px";
  mainText.style.lineHeight = "1.5";
  mainText.style.textAlign = "left";

  playAudioWithTimer(
    "audio/the-sound-of-a-mechanical-keyboard-on-which-text-is-typed-windows.mp3",
    29000,
  );

  index = 0;
  loopAnimation(
    [
      //"dd",
      "დღეები ერთმანეთს ჰგავდა: გათენებამდე კომპიუტერულ თამაშებში ჩაკარგული, ენერგიისგან დაცლილი და რეალურ სამყაროს სრულად მოწყვეტილი ვიყავი. ჩემი ცხოვრების წესი საშინელებას დაემსგავსა, სადაც მოუწესრიგებელი ძილი და უმიზნოდ გაფლანგული საათები ერთადერთ რეალობად მექცა. ერთფეროვან სქროლვაში მოულოდნელად GOA აკადემიის რეკლამას წავაწყდი, რომელმაც ჩემში მიძინებული ინტერესი — პროგრამირება და ნამდვილი საქმის კეთება — ისევ გააღვიძა. მივხვდი, რომ თამაშში მიღწეული ვირტუალური დონეების ნაცვლად, შემეძლო საკუთარი თავი რეალურ ცხოვრებაში, ვებ-დეველოპმენტსა და კოდის წერაში განმევითარებინა. ახლა მაგიდასთან ვზივარ, ეკრანზე რეგისტრაციის ღილაკი ანათებს და ვგრძნობ, რომ ეს ჩემი შანსია, საბოლოოდ დავაღწიო თავი ამ ქაოსს. ღრმად ჩავისუნთქე, თითი მაუსის ღილაკზე მაქვს მიბჯენილი და ვფიქრობ, მზად ვარ თუ არა, რომ ჩემი დრო თამაშის ნაცვლად მომავლის მშენებლობას დავუთმო.",
    ],
    40,
    100,
    1000,
    showChoiceButtons,
  );
});
