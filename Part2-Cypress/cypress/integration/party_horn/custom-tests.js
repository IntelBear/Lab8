describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get("#volume-number").clear().type("75");
    cy.get("#volume-slider").then(($el) => {
      expect($el).to.have.value(75);
    })
  });

  it('Volume input changes when slider changes', () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#volume-number").then(($el) => {
      expect($el).to.have.value(33);
    })
  });

  it('Audio volume changes when slider changes', () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.prop("volume",0.33);
    })
  });

  it('Image and source of horn change', () => {
    cy.get("#radio-party-horn").click();
    
    cy.get("#sound-image").then(($img) => {
      expect($img).to.have.attr("src","./assets/media/images/party-horn.svg");
    });

    cy.get("#horn-sound").then(($audio) => {
      expect($audio).to.have.attr("src","./assets/media/audio/party-horn.mp3");
    });
  });

  it('Volume icon changes', () => {
    cy.get("#volume-number").clear().type("0");

    cy.get("#volume-image").then(($icon) => {
      expect($icon).to.have.attr("src","./assets/media/icons/volume-level-0.svg");
    });

    cy.get("#volume-number").clear().type("33");

    cy.get("#volume-image").then(($icon) => {
      expect($icon).to.have.attr("src","./assets/media/icons/volume-level-1.svg");
    });

    cy.get("#volume-number").clear().type("66");

    cy.get("#volume-image").then(($icon) => {
      expect($icon).to.have.attr("src","./assets/media/icons/volume-level-2.svg");
    });

    cy.get("#volume-number").clear().type("100");

    cy.get("#volume-image").then(($icon) => {
      expect($icon).to.have.attr("src","./assets/media/icons/volume-level-3.svg");
    });
  });

  it("Honk button is disabled when invalid input", () => {
    cy.get("#volume-number").clear();

    cy.get("#honk-btn").then(($btn) => {
      expect($btn).to.have.prop('disabled').to.equal(true);
    })

    cy.get("#volume-number").clear().type("a");

    cy.get("#honk-btn").then(($btn) => {
      expect($btn).to.have.prop('disabled').to.equal(true);
    })
  })

  it("Type value outside volume range", () => {
    cy.get("#volume-number").clear().type("101");

    cy.get("#volume-number").then(($num) => {
      expect($num[0].checkValidity()).to.equal(false);
    })
  })
});
