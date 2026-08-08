const MAFMZAB = () => {

  return (
    <>
      <p>
        BEFORE MESSAGE
      </p>

      <Message
        messages={[
          {
            id: 1,
            sender: "M.A.F.",
            content: [
              {
                parts: [
                  {
                    text: "HELLO FROM MESSAGE"
                  }
                ]
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
