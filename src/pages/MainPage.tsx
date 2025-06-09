const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

function MainPage() {
  return (
    <section className="main">
      <h1 className="siteName">Eye See Now</h1>
      <section className="letterFilter">
        {/* Loop through letter elements */}
        <button className="letterElement">A</button>
      </section>
      <main className="mainSection">
        <section className="filter">
          <h2 className="filterHeader">Filter By:</h2>
          {/* Loop through filter elements */}
          <div className="filterElement">
            <button className="filterCheckbox" />
            <p className="filterElementName">
              {/* Filter Type Goes Here */}Placeholder
            </p>
          </div>
        </section>

        <section className="termElement">
          <div className="termElement">
            <h1 className="termName">
              {/* Term Name Goes Here */} Placeholder
            </h1>
            <p className="termDefinition">
              {/* Term Def Goes Here */} Lorem Ipsum Type Shit
            </p>
          </div>
        </section>
      </main>
    </section>
  );
}

export default MainPage;
