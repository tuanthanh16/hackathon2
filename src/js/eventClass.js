class api_event {
  constructor(name, description, date, image, feat = false) {
    this.name = name;
    this.description = description;
    this.image = image; //link to the image
    this.date = date; //string
    this.feat = feat;
    this.element = null; // to store element
  }
  render() {
    const eventElement = document.createElement("div");
    if (this.feat) {
      //this is featured event
      eventElement.className = "featevent";
      const feattext = document.createElement("div");
      feattext.className = "featevent-feat";
      feattext.innerHTML = "Featured event";
      eventElement.appendChild(feattext); //this is vertical title
      //add feat image
      const featimage = document.createElement("div");
      featimage.className = "featevent-image";
      featimage.innerHTML = `<img
            src=${this.image}
            alt=${this.name}
          />`;
      eventElement.appendChild(featimage);
      //add a div to wrap featname and featregister
      const wrap = document.createElement("div");

      wrap.className = "featevent-info";
      //add feat name
      const featname = document.createElement("div");
      featname.className = "featevent-info__name";
      featname.innerHTML = `<h3>${this.name}</h3>`;
      const featdesctiption = document.createElement("div");
      featdesctiption.className = "featevent-info__name--description";
      featdesctiption.innerHTML = `<p>${this.description}</p>`;
      featname.appendChild(featdesctiption);
      wrap.appendChild(featname);
      //registre here
      const registerElement = document.createElement("div");
      registerElement.className = "featevent-info__register";
      const btnElement = document.createElement("button");
      btnElement.className = "featevent-info__register--btn";
      btnElement.innerHTML = "Register";
      registerElement.appendChild(btnElement);
      wrap.appendChild(registerElement);
      eventElement.appendChild(wrap);

      // eventElement.appendChild(registerElement);
    } else {
      eventElement.className = "event";
      const nameElement = document.createElement("div"); //create a new div.event-name
      nameElement.className = "event-name";
      nameElement.innerHTML = `<h3>${this.name}</h3>`;
      eventElement.appendChild(nameElement);
      const btnElement = document.createElement("button");
      btnElement.innerHTML = `More`;
      eventElement.appendChild(btnElement);
    }
    this.element = eventElement;
    return eventElement;
  }
}
