const MAFMZAB = () => {
return (
<> <h1>M.A.F.'s Message Component Test</h1>
  <p>
    This page is intentionally ridiculous. It exists to test basically
    every feature currently supported by the Mimo Message component.
  </p>

  <p>
    If everything works, you should see several people having a very
    questionable conversation.
  </p>

  <Message
    messages={[

      /* ========================================
         NORMAL MESSAGE
      ======================================== */

      {
        id: 1,
        sender: "M.A.F.",
        timestamp: "Today at 12:01 AM",

        content: [
          {
            parts: [
              {
                text: "Hello everyone! This is the first Message component test."
              }
            ]
          }
        ]
      },


      /* ========================================
         GROUPED MESSAGE
      ======================================== */

      {
        id: 2,
        sender: "M.A.F.",
        timestamp: "Today at 12:01 AM",

        content: [
          {
            parts: [
              {
                text: "This message should be grouped with the one above."
              }
            ]
          }
        ]
      },

      {
        id: 3,
        sender: "M.A.F.",

        content: [
          {
            parts: [
              {
                text: "And this one should be grouped too."
              }
            ]
          }
        ]
      },


      /* ========================================
         ARSIKK
      ======================================== */

      {
        id: 4,
        sender: "MrArsikk",
        timestamp: "Today at 12:02 AM",

        content: [
          {
            parts: [
              {
                text: "What are you testing now?"
              }
            ]
          }
        ]
      },

      {
        id: 5,
        sender: "MrArsikk",

        content: [
          {
            parts: [
              {
                text: "Please tell me this isn't another AI-generated template."
              }
            ]
          }
        ],

        reactions: [
          {
            emoji: "💀",
            count: 3
          },
          {
            emoji: "👍",
            count: 1
          }
        ]
      },


      /* ========================================
         REPLY
      ======================================== */

      {
        id: 6,
        replyTo: 5,
        sender: "M.A.F.",
        timestamp: "Today at 12:03 AM",

        content: [
          {
            parts: [
              {
                text: "Unfortunately for you, it absolutely is."
              }
            ]
          }
        ]
      },


      /* ========================================
         MENTION
      ======================================== */

      {
        id: 7,
        sender: "LSP_Krissy",
        timestamp: "Today at 12:04 AM",

        content: [
          {
            parts: [
              {
                text: "Hey "
              },
              {
                mention: "M.A.F."
              },
              {
                text: " what are you two doing?"
              }
            ]
          }
        ]
      },


      /* ========================================
         CUSTOM EMOJI
      ======================================== */

      {
        id: 8,
        sender: "M.A.F.",

        content: [
          {
            parts: [
              {
                text: "Nothing important :maf:"
              }
            ]
          }
        ]
      },


      /* ========================================
         JUMBO CUSTOM EMOJI
      ======================================== */

      {
        id: 9,
        sender: "LSP_Krissy",

        content: [
          {
            parts: [
              {
                text: ":minori_wider:"
              }
            ]
          }
        ]
      },


      /* ========================================
         MULTIPLE CUSTOM EMOJIS
      ======================================== */

      {
        id: 10,
        sender: "LSP_Krissy",

        content: [
          {
            parts: [
              {
                text: ":miku_wahhh: :mafuyu_scared:"
              }
            ]
          }
        ]
      },


      /* ========================================
         SPOILER
      ======================================== */

      {
        id: 11,
        sender: "M.A.F.",
        timestamp: "Today at 12:05 AM",

        content: [
          {
            parts: [
              {
                text: "I have an extremely important secret: ||the test is going surprisingly well||"
              }
            ]
          }
        ]
      },


      /* ========================================
         EXPLICIT SPOILER PART
      ======================================== */

      {
        id: 12,
        sender: "MrArsikk",

        content: [
          {
            parts: [
              {
                text: "Fine. Here's another spoiler:"
              },
              {
                spoiler: "Arsikk probably complains about everything"
              }
            ]
          }
        ]
      },


      /* ========================================
         BOLD
      ======================================== */

      {
        id: 13,
        sender: "M.A.F.",

        content: [
          {
            bold: true,

            parts: [
              {
                text: "THIS ENTIRE MESSAGE IS BOLD."
              }
            ]
          }
        ]
      },


      /* ========================================
         ITALIC
      ======================================== */

      {
        id: 14,
        sender: "LSP_Krissy",

        content: [
          {
            italic: true,

            parts: [
              {
                text: "This entire message is italic."
              }
            ]
          }
        ]
      },


      /* ========================================
         CODE
      ======================================== */

      {
        id: 15,
        sender: "MrArsikk",

        content: [
          {
            code: true,

            parts: [
              {
                text: "const friendship = true;"
              }
            ]
          }
        ]
      },


      /* ========================================
         EDITED
      ======================================== */

      {
        id: 16,
        sender: "M.A.F.",
        timestamp: "Today at 12:07 AM",

        edited: true,

        content: [
          {
            parts: [
              {
                text: "This message has been edited."
              }
            ]
          }
        ]
      },


      /* ========================================
         HIDDEN MESSAGE
         This should NOT appear.
      ======================================== */

      {
        id: 17,
        sender: "M.A.F.",

        hidden: true,

        content: [
          {
            parts: [
              {
                text: "You should never be able to see this message."
              }
            ]
          }
        ]
      },


      /* ========================================
         MESSAGE AFTER HIDDEN MESSAGE
      ======================================== */

      {
        id: 18,
        sender: "M.A.F.",

        content: [
          {
            parts: [
              {
                text: "The hidden message above should not break grouping."
              }
            ]
          }
        ]
      },


      /* ========================================
         REPLY TO VISIBLE MESSAGE
      ======================================== */

      {
        id: 19,
        replyTo: 18,
        sender: "KeaTheDummy",
        timestamp: "Today at 12:09 AM",

        content: [
          {
            parts: [
              {
                text: "Good. It didn't."
              }
            ]
          }
        ]
      },


      /* ========================================
         IMAGE
      ======================================== */

      {
        id: 20,
        sender: "KeaTheDummy",
        timestamp: "Today at 12:10 AM",

        content: [
          {
            parts: [
              {
                text: "Have an image."
              }
            ]
          }
        ],

        attachments: [
          {
            url: "https://res.cloudinary.com/dvlttqld4/image/upload/q_auto/f_auto/v1778842618/2026-05-15-18-56-00-916d3a907600cef0f781514f18c68590_qcyed5.webp",
            alt: "M.A.F. attachment test"
          }
        ]
      },


      /* ========================================
         INLINE IMAGE
      ======================================== */

      {
        id: 21,
        sender: "M.A.F.",

        content: [
          {
            parts: [
              {
                text: "And this is an inline image:"
              },
              {
                image:
                  "https://res.cloudinary.com/dvlttqld4/image/upload/q_auto/f_auto/v1778842618/2026-05-15-18-56-00-916d3a907600cef0f781514f18c68590_qcyed5.webp",
                alt: "Inline M.A.F. image"
              }
            ]
          }
        ]
      },


      /* ========================================
         INLINE VIDEO
      ======================================== */

      {
        id: 22,
        sender: "LSP_Krissy",

        content: [
          {
            parts: [
              {
                text: "Video test:"
              },
              {
                video:
                  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              }
            ]
          }
        ]
      },


      /* ========================================
         REACTIONS
      ======================================== */

      {
        id: 23,
        sender: "MrArsikk",
        timestamp: "Today at 12:12 AM",

        content: [
          {
            parts: [
              {
                text: "I am going to react to this."
              }
            ]
          }
        ],

        reactions: [
          {
            emoji: "👍",
            count: 4
          },
          {
            emoji: "😂",
            count: 7
          },
          {
            emoji: "💀",
            count: 12
          },
          {
            emoji: "🤨",
            count: 2
          }
        ]
      },


      /* ========================================
         ROLE TEST
      ======================================== */

      {
        id: 24,
        sender: "M.A.F.",
        timestamp: "Today at 12:13 AM",

        role: "maf",

        content: [
          {
            parts: [
              {
                text: "Testing the M.A.F. role color and icon."
              }
            ]
          }
        ]
      },


      /* ========================================
         EMBED
      ======================================== */

      {
        id: 25,
        sender: "MrArsikk",
        timestamp: "Today at 12:14 AM",

        content: [
          {
            parts: [
              {
                text: "Here's an embed."
              }
            ]
          }
        ],

        embed: {
          title: "MAFriends Message Engine",
          description:
            "A completely unnecessary test of every feature currently available."
        }
      },


      /* ========================================
         MULTIPLE CONTENT LINES
      ======================================== */

      {
        id: 26,
        sender: "LSP_Krissy",
        timestamp: "Today at 12:15 AM",

        content: [
          {
            parts: [
              {
                text: "First line."
              }
            ]
          },
          {
            parts: [
              {
                text: "Second line."
              }
            ]
          },
          {
            parts: [
              {
                text: "Third line."
              }
            ]
          }
        ]
      },


      /* ========================================
         MULTI-USER CONVERSATION
      ======================================== */

      {
        id: 27,
        sender: "KeaTheDummy",
        timestamp: "Today at 12:16 AM",

        content: [
          {
            parts: [
              {
                text: "So what exactly are we testing?"
              }
            ]
          }
        ]
      },

      {
        id: 28,
        replyTo: 27,
        sender: "M.A.F.",

        content: [
          {
            parts: [
              {
                text: "Everything."
              }
            ]
          }
        ]
      },

      {
        id: 29,
        replyTo: 28,
        sender: "LSP_Krissy",

        content: [
          {
            parts: [
              {
                text: "That's not very specific."
              }
            ]
          }
        ]
      },

      {
        id: 30,
        sender: "MrArsikk",

        content: [
          {
            parts: [
              {
                text: "It's M.A.F. What did you expect?"
              }
            ]
          }
        ]
      },


      /* ========================================
         MENTION + SPOILER + EMOJI
      ======================================== */

      {
        id: 31,
        sender: "M.A.F.",
        timestamp: "Today at 12:18 AM",

        content: [
          {
            parts: [
              {
                mention: "MrArsikk"
              },
              {
                text: " ||I have one final thing to say|| :maf:"
              }
            ]
          }
        ],

        reactions: [
          {
            emoji: "👀",
            count: 5
          }
        ]
      },


      /* ========================================
         FINAL MESSAGE
      ======================================== */

      {
        id: 32,
        sender: "MrArsikk",
        timestamp: "Today at 12:19 AM",

        content: [
          {
            parts: [
              {
                text: "nice"
              }
            ]
          }
        ],

        reactions: [
          {
            emoji: "👍",
            count: 1
          }
        ]
      }

    ]}
  />

  <p>
    AFTER MESSAGE
  </p>
</>


);
};

window.friendStories =
window.friendStories || {};

window.friendStories.mafmzab =
MAFMZAB;
