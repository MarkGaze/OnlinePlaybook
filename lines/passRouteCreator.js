var routes = [];

class PassRouteCreator {
  static Create(player, name) {
    var side = 1;
    if (player.x > centre)
      side = -1;

    var route = routes.find((r) => {
      return r.name == name;
    });

    if(route){
      player.instruction = new Route(player.x, player.y - (player.size / 2), route.definition, side);
    }
  }

  static LoadRoutes(data) {
    data = [{
        "name": "fade",
        "definition": [{
          "distance": 20
        }]
      },
      {
        "name": "slant",
        "definition": [{
          "distance": 2
        },
        {
          "distance": 20,
          "angle": 45
        }]
      },
      {
        "name": "shortcorner",
        "definition": [{
          "distance": 2
        },
        {
          "distance": 20,
          "angle": -45
        }]
      },
      {
        "name": "hook",
        "definition": [{
          "distance": 7
        },
        {
          "distance": 2,
          "angle": 135
        }]
      },
      {
        "name": "hookout",
        "definition": [{
          "distance": 7
        },
        {
          "distance": 2,
          "angle": -135
        }]
      },
      {
        "name": "drag",
        "definition": [{
          "distance": 30,
          "angle": 65
        }]
      },
      {
        "name": "post",
        "definition": [{
          "distance": 10
        },
        {
          "distance": 10,
          "angle": 45
        }]
      }
    ];
    routes = data;
  }
}