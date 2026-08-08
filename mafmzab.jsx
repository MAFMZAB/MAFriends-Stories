const MAFMZAB = () => {

  return (
    <>
      <h1>Header Test</h1>
      <p>Paragraph Test</p>
      <ul>
        <li>List Test</li>
      </ul>

      <Message
        messages={[
          {
            id: 1,
            sender: "M.A.F.",
            content: [
              {
                parts: [
                  {
                    text: "Testing if <Message/> components can be loaded from GitHub into Mimo."
                  },
                  {
                    text: "Seems like it works."
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
