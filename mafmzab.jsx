const MAFMZAB = () => {

  return (
    <>
      <p>
        This is M.A.F.'s story.
      </p>

      <h2>
        Some stuff
      </h2>

      <p>
        Arsikk is probably going to complain
        that this is obviously an AI template.
      </p>

      <Message
        messages={[
          {
            id: 1,
            sender: "M.A.F.",
            timestamp: "Right now",
            content: [
              {
                parts: [
                  {
                    text: "This message is being rendered by the Mimo Message component."
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            sender: "MrArsikk",
            content: [
              {
                parts: [
                  {
                    text: "WHAT"
                  }
                ]
              }
            ]
          }
        ]}
      />
    </>
  );

};

window.friendStories =
  window.friendStories || {};

window.friendStories.mafmzab =
  MAFMZAB;
