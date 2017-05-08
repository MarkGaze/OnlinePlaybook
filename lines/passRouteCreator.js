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
      player.instruction = new Route(player.x, player.y, route.definition, side);
    }
  }

  static LoadRoutes(data) {
      //TODO: Change distance to be worked out by yards
    data = [{
        "name": "fade",
        "definition": [{
          "distance": 300
        }]
      },
      {
        "name": "slant",
        "definition": [{
          "distance": 50
        },
        {
          "distance": 300,
          "angle": 45
        }]
      },
      {
        "name": "shortcorner",
        "definition": [{
          "distance": 50
        },
        {
          "distance": 300,
          "angle": -45
        }]
      },
      {
        "name": "hook",
        "definition": [{
          "distance": 200
        },
        {
          "distance": 50,
          "angle": 135
        }]
      },
      {
        "name": "hookout",
        "definition": [{
          "distance": 200
        },
        {
          "distance": 50,
          "angle": -135
        }]
      },
      {
        "name": "drag",
        "definition": [{
          "distance": 500,
          "angle": 65
        }]
      },
      {
        "name": "post",
        "definition": [{
          "distance": 300
        },
        {
          "distance": 300,
          "angle": 45
        }]
      }
    ];
    routes = data;
  }
}