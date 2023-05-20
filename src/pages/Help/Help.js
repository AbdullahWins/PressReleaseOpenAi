import React from "react";
import Hero from "../../components/Hero/Hero";

const Help = () => {
  // changing the webpage title dynamically
  document.title = `${process.env.REACT_APP_ApplicationName} | Help`;
  return (
    <div>
      <Hero></Hero>
      <section className="flex items-center justify-center">
        <div className="max-w-5xl p-4 md:p-20 rounded-xl border-2 border-whiteMid m-4 md:my-20 w-full">
          <div className="flex flex-col md:flex-row items-start justify-center gap-4 px-4">
            <div className="bg-whiteHigh rounded-2xl min-h-80">
              <p className="text-transparent bg-clip-text bg-gradient-to-b from-getStartedGradientStart to-getStartedGradientEnd text-3xl md:text-5xl font-bold">
                How to use
              </p>
              <ol className="text-base md:text-xl text-start text-aboutDetailsColor pt-12">
                <li>
                  1. Choose a topic: Select a topic that you want the{" "}
                  {process.env.REACT_APP_ApplicationName} to write about. The
                  webapp may have a list of popular topics or you can input a
                  specific topic.
                </li>
                <li className="py-4">
                  2. Provide key points: Give the{" "}
                  {process.env.REACT_APP_ApplicationName} some key points or
                  information that you want to include in the article. This
                  could be a summary of the topic or some specific details that
                  you want to emphasize.
                </li>
                <li>
                  3. Review and edit: Once the{" "}
                  {process.env.REACT_APP_ApplicationName} has generated the
                  article, review it carefully. Make any necessary edits or
                  changes to ensure that the article meets your needs.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
