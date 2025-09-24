// Function: filter buttons

function filterEvents(filterType, value) {
    const events = document.querySelectorAll('.container-date-event'); 

    events.forEach(event => {
        if (event.dataset[filterType] === value || value === "all"){
            event.classList.remove("hidden");
        } else {
            event.classList.add("hidden");
        }
    });
}

// Function: search engine


    const input = document.getElementById("input-search");
    const contentBoxes = document.querySelectorAll(".container-date-event");

     input.addEventListener("input", () => {
      const searchTerm =  input.value.toLowerCase();

      contentBoxes.forEach(box => {
        const keywords = box.dataset.tags.toLowerCase();
        const text = box.textContent.toLowerCase();

        if (keywords.includes(searchTerm) || text.includes(searchTerm)) {
          box.classList.remove("hidden");
        } else {
          box.classList.add("hidden");
        }
      });
    });