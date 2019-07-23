var cube = 10;
var half = cube/2;
AFRAME.registerComponent('create_room',{
    init: function(){
        var scene = document.querySelector('a-scene');
        // room creation
        var collision = [];
        //initialize all 6 planes
        for(i=0;i<6;i++){
            collision[i] = document.createElement('a-entity');
            collision[i].setAttribute('static-body','');
            collision[i].setAttribute('geometry',{
                primitive: 'plane',
                height: cube,
                width: cube
            });
            collision[i].setAttribute('material','color','#D77C55');
        }
        // top and bottom
        for(i=0;i<2;i++){
            collision[i].setAttribute('rotation',{
                x:-90
            });
            if (i%2){
                collision[i].setAttribute('position',{
                    y: cube
                });
                collision[i].setAttribute('rotation',{
                    x: 90
                });
            }
        }
        // left and right
        for(i=2;i<4;i++){
            if(i%2){
                collision[i].setAttribute('position',{
                    z: half*-1
                });
            }else{
                collision[i].setAttribute('position',{
                    z: half
                })
                collision[i].setAttribute('rotation',{
                    y: 180
                });
            };
        }
        // left and righta
        for(i=4;i<6;i++){
            collision[i].setAttribute('rotation',{
                y:-90
            });
            if(i%2){
                collision[i].setAttribute('position',{
                    x: half
                });

            }else{
                collision[i].setAttribute('position',{
                    x: half*-1
                });
                collision[i].setAttribute('rotation',{
                    y: 90
                });
            }
        }
        for (i=2;i<6;i++){
            collision[i].setAttribute('position',{
                y: half
            });
        }
        for(i=0;i<6;i++){
            scene.appendChild(collision[i]);
        }
        //add code here
        var light = document.createElement('a-light');
        light.setAttribute('position',{
            y: half
        });
        light.setAttribute('type','point');
        scene.appendChild(light);
    }
})
