(function() {
    'use strict';

    self.addEventListener('sync', function(event) {
        if (event.tag == 'sendFormData') {
            console.log(event.tag);
        }
    });

}());
