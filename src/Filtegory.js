function Filtegory(query) {
    // Select Filtegory container
    let filtegoryContainer = document.querySelector(query);
    // Select all category items
    let categories = filtegoryContainer.querySelectorAll('.categories>.category');
    // Select the 'All' category
    let categoryAll = filtegoryContainer.querySelector('.categories>.category[data-category="all"]');


    categories.forEach(category => {
        // add click event for each category
        category.addEventListener('click', e => {
            // Prevent default click action
            e.preventDefault();

            // When the 'All' category was clicked
            if (e.target == categoryAll) {
                // Disable other categories
                categories.forEach(c => {
                    c.classList.remove('active');
                });

                // Enable the 'All' category
                categoryAll.classList.add('active');

                // Filter content
                FilterContent();
            } else {
                // Disable the 'All' category
                categoryAll.classList.remove('active');

                // Toggle clicked catogory
                e.target.classList.toggle('active');

                // Make sure at least one category is enabled
                if (filtegoryContainer.querySelector('.categories .category.active') == null) {
                    // Enable the 'All' category if no category is enabled
                    categoryAll.classList.add('active');
                }

                // Filter content
                FilterContent();
            }
        })
    })

    // Function for filter content by enabled categories
    function FilterContent() {
        // Get list of items
        items = filtegoryContainer.querySelectorAll('.items>.item');
        
        // if the 'All' category is enabled
        if ( categoryAll.classList.contains('active') ) {
            // Remove hidden class from all categories
            items.forEach(item => item.classList.remove('hidden-item'));
        } else {
            // Get list of enabled categories
            categoryList = [];
            filtegoryContainer.querySelectorAll('.categories>.category.active').forEach(c => {
                categoryList.push(c.dataset.category);
            });

            // For each item in container
            items.forEach(item => {
                categoryList.includes(item.dataset.category)
                // Remove hidden class from enabled items
                ? item.classList.remove('hidden-item')
                // Add hidden class to disabled items
                : item.classList.add('hidden-item');
            })
        }
    }
}
