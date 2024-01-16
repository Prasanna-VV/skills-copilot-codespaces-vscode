function skillsMember() {
      return {
    restrict: 'E',
    templateUrl: 'app/components/members/member.html',
    scope: {
      member: '='
    },
    link: function(scope, element, attrs) {
      scope.member.skills = _.uniq(scope.member.skills);
    }
  }

}
