import angular from 'angular';
import modal from 'modal';

let app = angular.module('exampleApp', [
    modal
]);

app.run((modal) => {
    modal.open({
        template: 'dialog',
        className: ''
    });
});
