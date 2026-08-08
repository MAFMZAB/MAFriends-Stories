// Message.jsx

import React, { useState } from "react";
import {
  getUser, getNameplate
} from "./UserIdentity.jsx";
import "./Message.css";

/* ========================================
   CUSTOM EMOJIS
======================================== */

const customEmojis = {
  maf: "https://res.cloudinary.com/dvlttqld4/image/upload/q_auto/f_auto/v1778842618/2026-05-15-18-56-00-916d3a907600cef0f781514f18c68590_qcyed5.webp",

  minori_wider:
    "https://res.cloudinary.com/dvlttqld4/image/upload/v1782315364/1372542243340292167_foi2qy.webp",
  miku_wahhh:
    "https://res.cloudinary.com/dvlttqld4/image/upload/v1782315351/1441952342571356230_u04pbm.webp",
  an_shoot:
    "https://res.cloudinary.com/dvlttqld4/image/upload/v1785429442/87A04FFB-D15C-4B13-A3A8-6430A7F94003_tugwqb.gif",
  mafuyu_scared:
    "https://res.cloudinary.com/dvlttqld4/image/upload/v1782309938/85f5c930-fcde-407c-baca-0246cdd53bed.png",
};

/* ========================================
   RANDOM STATUS
======================================== */
const statuses = [
  "online",
  "idle",
  "dnd",
  "offline"
];

const randomStatus =
  statuses[Math.floor(Math.random()*statuses.length)];

/* ========================================
   SERVER ROLES
======================================== */

const roles = {
  maf: {
    color: "#57f287",
    icon: "https://res.cloudinary.com/dvlttqld4/image/upload/q_auto/f_auto/v1778842618/2026-05-15-18-56-00-916d3a907600cef0f781514f18c68590_qcyed5.webp",
  },
  I: {
    icon: "https://res.cloudinary.com/dvlttqld4/image/upload/v1784651595/468f22f4-4e2e-4533-a895-4c746bcfb788.png",
  },
  II: {
    icon: "https://res.cloudinary.com/dvlttqld4/image/upload/v1784651699/ae87dca81be61544f6a01e384607055c_vbhfmy.webp",
  },
  III: {
    icon: "https://res.cloudinary.com/dvlttqld4/image/upload/v1784651695/99eaf9b46ea213dc62049d79a1335777_jd2ba5.webp",
  },
  IV: {
    icon: "https://res.cloudinary.com/dvlttqld4/image/upload/v1784651677/526ebdb6cfd964345fa56daaa3290bab_ithp4w.webp",
  },
  V: {
    icon: "https://res.cloudinary.com/dvlttqld4/image/upload/v1784651673/75decbafe539894c4ba990b0e0651f85_ctn5na.webp",
  },
  VI: {
    icon: "https://res.cloudinary.com/dvlttqld4/image/upload/v1784651667/61af96bdae56795fbb9833d28588f30e_xp7tsl.webp",
  },
};

/* ========================================
   HELPERS
======================================== */

const isEmojiOnly = (content = []) => {
  if (content.length !== 1) return false;

  const line = content[0];

  const text =
    line?.parts
      ?.map((part) => part.text || "")
      .join("")
      .trim() || "";

  const customEmojiRegex = /^(:[a-zA-Z0-9_]+:\s*)+$/;

  const unicodeEmojiRegex =
    /^(\p{Emoji_Presentation}|\p{Extended_Pictographic}|\s)+$/u;

  return customEmojiRegex.test(text) || unicodeEmojiRegex.test(text);
};

const parseText = (text, jumbo = false) => {
  const regex = /(\|\|.*?\|\||:[a-zA-Z0-9_]+:)/g;

  const splitParts = text.split(regex);

  return splitParts.map((part, index) => {
    /* =========================
       SPOILERS
    ========================= */

    if (part.startsWith("||") && part.endsWith("||")) {
      const spoilerText = part.slice(2, -2);

      return <Spoiler key={index}>{parseText(spoilerText, jumbo)}</Spoiler>;
    }

    /* =========================
       CUSTOM EMOJIS
    ========================= */

    const emojiMatch = part.match(/^:([a-zA-Z0-9_]+):$/);

    if (emojiMatch) {
      const emojiName = emojiMatch[1];
      const emojiSrc = customEmojis[emojiName];

      if (emojiSrc) {
        return (
          <span
            key={index}
            className="emoji-wrapper"
            data-name={`:${emojiName}:`}
          >
            <img
              src={emojiSrc}
              alt={emojiName}
              className={`custom-emoji ${jumbo ? "jumbo-emoji" : ""}`}
            />
          </span>
        );
      }
    }

    /* =========================
       NORMAL TEXT
    ========================= */

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

const parseBio = (text) => {
  return text
    .split("\n")
    .map((line, index) => {

      let content = line;

      content = content.replace(
        /\*\*(.*?)\*\*/g,
        "<b>$1</b>"
      );

      content = content.replace(
        /(\*|_)(.*?)\1/g,
        "<i>$2</i>"
      );


      if (content.startsWith("- ")) {
        return (
          <li key={index}>
            {content.slice(2)}
          </li>
        );
      }

      return (
        <div
          key={index}
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      );
    });
};

const Spoiler = ({ children }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <span
      className={`spoiler ${revealed ? "revealed" : ""}`}
      onClick={() => setRevealed(true)}
    >
      {children}
    </span>
  );
};

const renderParts = (parts = [], jumbo = false) => {
  return parts.map((part, index) => {

    /* ========================================
       NORMAL TEXT
    ======================================== */

    if (part.text) {
      return (
        <React.Fragment key={index}>
          {parseText(part.text, jumbo)}
        </React.Fragment>
      );
    }


    /* ========================================
       MENTION
    ======================================== */

    if (part.mention) {
      return (
        <span key={index} className="mentioned">
          @{part.mention}
        </span>
      );
    }


    /* ========================================
       SPOILER
    ======================================== */

    if (part.spoiler) {
      return (
        <Spoiler key={index}>
          {parseText(part.spoiler, jumbo)}
        </Spoiler>
      );
    }


    /* ========================================
       INLINE IMAGE
    ======================================== */

    if (part.image) {
      return (
        <img
          key={index}
          src={part.image}
          alt={part.alt || "image"}
          className="inline-image"
          loading="lazy"
        />
      );
    }


    /* ========================================
       INLINE VIDEO
    ======================================== */

    if (part.video) {
      return (
        <video
          key={index}
          className="inline-video"
          src={part.video}
          controls
          preload="metadata"
        />
      );
    }


    return null;
  });
};
const getPlainTextFromParts = (parts = []) => {
  return parts
    .map((part) => {
      if (part.text) return part.text;

      if (part.mention) {
        return `@${part.mention}`;
      }

      if (part.spoiler) {
        return part.spoiler;
      }

      return "";
    })
    .join("");
};

const getReplyPreview = (message) => {
  if (!message?.content) return "";

  const text = message.content
    .map((line) => getPlainTextFromParts(line.parts || []))
    .join(" ");

  if (text.length > 45) {
    return text.slice(0, 45) + "...";
  }

  return text;
};

const ProfilePopup = ({ user, close }) => {
  const profile = getUser(user);
  const nameplate = getNameplate(user);

  const randomStatus =
    statuses[Math.floor(Math.random() * statuses.length)];

  if (!profile) return null;

  const displayName = user;

  return (
    <div
      className="profile-overlay"
      onClick={close}
    >
      <div
        className="profile-popup"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ========================================
            BANNER
        ======================================== */}

        <div className="profile-banner" />


        {/* ========================================
            PFP + DECORATION + STATUS
        ======================================== */}

        <div className="profile-avatar-container">

          <img
            className="profile-pfp"
            src={profile.pfp}
            alt={displayName}
          />

          {profile.decoration && (
            <img
              className="profile-pfp-decoration"
              src={profile.decoration}
              alt=""
            />
          )}

          <div className={`status ${randomStatus}`} />

        </div>


        {/* ========================================
            PROFILE INFO
        ======================================== */}

        <div className="profile-info">

          {/* DISPLAY NAME */}

          <h2 className="profile-display-name">
            {displayName}
          </h2>


          {/* USERNAME / NAMEPLATE */}

          <div className="profile-nameplate">
            @{nameplate}
          </div>


          {/* BADGES */}

          {profile.badges?.length > 0 && (
            <div className="profile-badges">
              {profile.badges.map((badge, i) => (
                <span key={i}>
                  {badge}
                </span>
              ))}
            </div>
          )}


          {/* BIO */}

          {profile.bio && (
            <div className="profile-bio">
              {parseBio(profile.bio)}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

/* ========================================
   MESSAGE BUBBLE
======================================== */

/* ========================================
   MESSAGE BUBBLE
======================================== */

const Bubble = ({ msg, showHeader, messages }) => {

  /* ========================================
     PROFILE POPUP STATE
  ======================================== */

  const [profileUser, setProfileUser] = useState(null);


  /* ========================================
     MESSAGE DATA
  ======================================== */

  const profile = getUser(msg.sender);

  const replyMessage = messages.find(
    (m) => m.id === msg.replyTo
  );

  const jumbo = isEmojiOnly(msg.content);

  const roleData = msg.role && roles[msg.role];


  /* ========================================
     OPEN PROFILE
  ======================================== */

  const openProfile = (user) => {
    if (!user) return;

    const userProfile = getUser(user);

    if (!userProfile) return;

    setProfileUser(user);
  };


  /* ========================================
     CLOSE PROFILE
  ======================================== */

  const closeProfile = () => {
    setProfileUser(null);
  };


  return (
    <div
      className={`chat-box ${showHeader ? "" : "grouped"}`}
    >

      {/* ========================================
          PFP
      ======================================== */}

      {showHeader ? (

        <div className="pfp-container">

          <img
            className="pfp"
            src={profile?.pfp}
            alt={msg.sender}
            onClick={() => openProfile(msg.sender)}
          />

          {profile?.decoration && (
            <img
              className="pfp-decoration"
              src={profile.decoration}
              alt=""
            />
          )}

        </div>

      ) : (

        <div className="pfp-spacer" />

      )}


      {/* ========================================
          MESSAGE BODY
      ======================================== */}

      <div className="message-body">


        {/* ========================================
            REPLY PREVIEW
        ======================================== */}

        {msg.replyTo && replyMessage && (

          <div className="reply-preview">

            {/* Discord-style curved connector */}

            <div className="reply-connector" />


            {/* Reply contents */}

            <div className="reply-preview-content">

              <span
                className="reply-author"
                onClick={() =>
                  openProfile(replyMessage.sender)
                }
              >
                {replyMessage.sender}
              </span>


              <span className="reply-message-text">
                {getReplyPreview(replyMessage)}
              </span>

            </div>

          </div>

        )}


        {/* ========================================
            MESSAGE HEADER
        ======================================== */}

        {showHeader && (

          <div className="message-header">

            <span
              className="sender"
              style={{
                color:
                  roleData?.color ||
                  msg.nameColor ||
                  "white",
              }}
              onClick={() => openProfile(msg.sender)}
            >

              {msg.sender}

              {roleData?.icon && (
                <img
                  src={roleData.icon}
                  alt="role"
                  className="role-icon"
                />
              )}

            </span>


            <span className="timestamp">
              {msg.timestamp}
            </span>


            {msg.edited && (
              <span className="edited">
                (edited)
              </span>
            )}

          </div>

        )}


        {/* ========================================
            MESSAGE CONTENT
        ======================================== */}

        <div className="message-content">

          {msg.content.map((line, index) => (

            <p
              key={index}
              className={`
                text-content
                ${jumbo ? "jumbo-text" : ""}
                ${line.automod ? "automod-text" : ""}
              `}
            >

              {line.bold ? (

                <strong>
                  {renderParts(line.parts, jumbo)}
                </strong>

              ) : line.italic ? (

                <em>
                  {renderParts(line.parts, jumbo)}
                </em>

              ) : line.code ? (

                <code>
                  {renderParts(line.parts, jumbo)}
                </code>

              ) : (

                renderParts(
                  line.parts ||
                  (line.text
                    ? [{ text: line.text }]
                    : []),
                  jumbo
                )

              )}

            </p>

          ))}

        </div>


        {/* ========================================
            ATTACHMENTS
        ======================================== */}

        {msg.attachments &&
          msg.attachments.length > 0 && (

          <div className="attachments">

            {msg.attachments.map(
              (attachment, index) => (

                <a
                  key={index}
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <img
                    src={attachment.url}
                    alt={
                      attachment.alt ||
                      "attachment"
                    }
                    className="attachment-image"
                    loading="lazy"
                  />

                </a>

              )
            )}

          </div>

        )}


        {/* ========================================
            REACTIONS
        ======================================== */}

        {msg.reactions && (

          <div className="reactions">

            {msg.reactions.map(
              (reaction, i) => (

                <div
                  key={i}
                  className="reaction"
                >
                  {reaction.emoji}{" "}
                  {reaction.count}
                </div>

              )
            )}

          </div>

        )}


        {/* ========================================
            EMBED
        ======================================== */}

        {msg.embed && (

          <div className="embed">

            <div className="embed-color" />

            <div className="embed-content">

              <div className="embed-title">
                {msg.embed.title}
              </div>

              <div className="embed-description">
                {msg.embed.description}
              </div>

            </div>

          </div>

        )}

      </div>


      {/* ========================================
          PROFILE POPUP
      ======================================== */}

      {profileUser && (

        <ProfilePopup
          user={profileUser}
          close={closeProfile}
        />

      )}

    </div>
  );
};

/* ========================================
   MAIN ENGINE
======================================== */

export const Message = ({ messages = [] }) => {
  return (
    <>
      <div className="message-list">
        {messages.map((msg, index) => {
          if (msg.hidden) return null;

          let previousVisible = null;

          for (let i = index - 1; i >= 0; i--) {
            if (!messages[i].hidden) {
              previousVisible = messages[i];
              break;
            }
          }

          const grouped =
            previousVisible && previousVisible.sender === msg.sender;

          return (
            <Bubble
              key={msg.id || index}
              msg={msg}
              messages={messages}
              showHeader={!grouped}
            />
          );
        })}
      </div>
    </>
  );
};
