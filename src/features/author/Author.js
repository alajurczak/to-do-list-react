import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";


export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Alicja Jurczak"
            body={
                <>
                    <p>
                        Na codzień pracuję w firmie budowlanej i zajmuję się wykonywaniem rysunków budowlanych/wykonawczych obiektów branży torowej i mostowej 👷‍♀️ Jednak popołudniami i weekendami zajmuję się pogłębianiem wiedzy z zakresu programowania, aby stać się <strong>frontend developerem!</strong> 👩‍💻
                    </p>
                    <p>
                        Wolne chwile uwielbiam spędzać na wyprawach do kina 🍿🎞
                    </p>
                </>
            } />
    </Container>
);