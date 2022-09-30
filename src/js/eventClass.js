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
      eventElement.innerHTML =
        '<div class="featevent-feat">Featured event</div>';
    } else {
      eventElement.className = "event";
      eventElement.innerHTML = `<div class="event-name">
            <h3>ICE RINK BY CHARLES BRIDGE</h3>
          </div>`;
    }
    this.element = eventElement;
    return eventElement;
  }
}
