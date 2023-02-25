
define('app/episodes/space/resources', 
[

], 
function() {

    return function() {
        return [
            // html resources
            {id: 'h-bg', src: FULLADDR + 'images/episodes/space/game-bg.jpg'},
            {id: 'h-bottom-line', src: FULLADDR + 'images/episodes/space/game-bottom-line.png'},
            // sounds
            {id: 's-block-hit-1', src: FULLADDR + 'sounds/episodes/space/block-hit-1.ogg'},
            {id: 's-block-hit-2', src: FULLADDR + 'sounds/episodes/space/block-hit-2.ogg'},
            {id: 's-block-hit-3', src: FULLADDR + 'sounds/episodes/space/block-hit-3.ogg'},
            {id: 's-block-hit-4', src: FULLADDR + 'sounds/episodes/space/block-hit-4.ogg'},
            {id: 's-block-indestructible-hit', src: FULLADDR + 'sounds/episodes/space/block-indestructible-hit.ogg'},
            {id: 's-bonus-catch', src: FULLADDR + 'sounds/episodes/space/bonus-catch.ogg'},
            {id: 's-paddle-hit', src: FULLADDR + 'sounds/episodes/space/paddle-hit.ogg'},
            {id: 's-wall-hit', src: FULLADDR + 'sounds/episodes/space/wall-hit.ogg'},
            {id: 's-win', src: FULLADDR + 'sounds/episodes/space/win.ogg'},
            {id: 's-lost-ball', src: FULLADDR + 'sounds/episodes/space/lost-ball.ogg'},
            {id: 's-gun', src: FULLADDR + 'sounds/episodes/space/gun.ogg'},
            {id: 's-music', src: FULLADDR + 'sounds/episodes/space/music.ogg'},
            // canvas resources
            {id: 'c-canvas-bg-front', src: FULLADDR + 'images/episodes/space/game-canvas-bg-front.png'},
            {id: 'c-canvas-bg-mid', src: FULLADDR + 'images/episodes/space/game-canvas-bg-mid.png'},
            {id: 'c-canvas-bg-back', src: FULLADDR + 'images/episodes/space/game-canvas-bg-back.png'},
            {id: 'c-ball-big', src: FULLADDR + 'images/episodes/space/ball-big.png'},
            {id: 'c-ball-normal', src: FULLADDR + 'images/episodes/space/ball-normal.png'},
            {id: 'c-ball-small', src: FULLADDR + 'images/episodes/space/ball-small.png'},
            {id: 'c-ball-steel', src: FULLADDR + 'images/episodes/space/ball-steel.png'},
            {id: 'c-paddle-left', src: FULLADDR + 'images/episodes/space/paddle-left.png'},
            {id: 'c-paddle-center', src: FULLADDR + 'images/episodes/space/paddle-center.png'},
            {id: 'c-paddle-right', src: FULLADDR + 'images/episodes/space/paddle-right.png'},
            {id: 'c-paddle-barrel', src: FULLADDR + 'images/episodes/space/paddle-barrel.png'},
            {id: 'c-paddle-bullet', src: FULLADDR + 'images/episodes/space/paddle-bullet.png'},
            {id: 'c-btn-help', src: FULLADDR + 'images/episodes/space/btn-help.png'},
            {id: 'c-btn-options', src: FULLADDR + 'images/episodes/space/btn-options.png'},
            {id: 'c-btn-play', src: FULLADDR + 'images/episodes/space/btn-play.png'},
            {id: 'c-btn-user', src: FULLADDR + 'images/episodes/space/btn-user.png'},
            {id: 'c-particle-big-steel', src: FULLADDR + 'images/episodes/space/particles/big/default.png'},
            // particle small
            {id: 'c-particle-small-default', src: FULLADDR + 'images/episodes/space/particles/small/default.png'},
            {id: 'c-particle-small-100-black', src: FULLADDR + 'images/episodes/space/particles/small/100_black.png'},
            {id: 'c-particle-small-101-gray', src: FULLADDR + 'images/episodes/space/particles/small/101_gray.png'},
            {id: 'c-particle-small-103-light-gray', src: FULLADDR + 'images/episodes/space/particles/small/103_light_gray.png'},
            {id: 'c-particle-small-104-white', src: FULLADDR + 'images/episodes/space/particles/small/104_white.png'},
            {id: 'c-particle-small-200-yellow', src: FULLADDR + 'images/episodes/space/particles/small/200_yellow.png'},
            {id: 'c-particle-small-201-dark-yellow', src: FULLADDR + 'images/episodes/space/particles/small/201_dark_yellow.png'},
            {id: 'c-particle-small-202-spring-orange', src: FULLADDR + 'images/episodes/space/particles/small/202_spring_orange.png'},
            {id: 'c-particle-small-203-orange', src: FULLADDR + 'images/episodes/space/particles/small/203_orange.png'},
            {id: 'c-particle-small-205-red', src: FULLADDR + 'images/episodes/space/particles/small/205_red.png'},
            {id: 'c-particle-small-206-carmin', src: FULLADDR + 'images/episodes/space/particles/small/206_carmin.png'},
            {id: 'c-particle-small-300-light-yellow', src: FULLADDR + 'images/episodes/space/particles/small/300_light_yellow.png'},
            {id: 'c-particle-small-301-crazy-green', src: FULLADDR + 'images/episodes/space/particles/small/301_crazy_green.png'},
            {id: 'c-particle-small-302-yellow-mint', src: FULLADDR + 'images/episodes/space/particles/small/302_yellow_mint.png'},
            {id: 'c-particle-small-303-mint', src: FULLADDR + 'images/episodes/space/particles/small/303_mint.png'},
            {id: 'c-particle-small-304-green', src: FULLADDR + 'images/episodes/space/particles/small/304_green.png'},
            {id: 'c-particle-small-305-dark-green', src: FULLADDR + 'images/episodes/space/particles/small/305_dark_green.png'},
            {id: 'c-particle-small-306-black-green', src: FULLADDR + 'images/episodes/space/particles/small/306_black_green.png'},
            {id: 'c-particle-small-400-light-blue', src: FULLADDR + 'images/episodes/space/particles/small/400_light_blue.png'},
            {id: 'c-particle-small-401-light-blue', src: FULLADDR + 'images/episodes/space/particles/small/401_light_blue.png'},
            {id: 'c-particle-small-402-blue', src: FULLADDR + 'images/episodes/space/particles/small/402_blue.png'},
            {id: 'c-particle-small-403-dos', src: FULLADDR + 'images/episodes/space/particles/small/403_dos.png'},
            {id: 'c-particle-small-404-dark-dos', src: FULLADDR + 'images/episodes/space/particles/small/404_dark_dos.png'},
            {id: 'c-particle-small-500-apink', src: FULLADDR + 'images/episodes/space/particles/small/500_apink.png'},
            {id: 'c-particle-small-501-light-pink', src: FULLADDR + 'images/episodes/space/particles/small/501_light_pink.png'},
            {id: 'c-particle-small-502-pink', src: FULLADDR + 'images/episodes/space/particles/small/502_pink.png'},
            {id: 'c-particle-small-503-violet', src: FULLADDR + 'images/episodes/space/particles/small/503_violet.png'},
            {id: 'c-particle-small-504-dark-violet', src: FULLADDR + 'images/episodes/space/particles/small/504_dark_violet.png'},
            {id: 'c-particle-small-600-red-blood', src: FULLADDR + 'images/episodes/space/particles/small/600_red_blood.png'},
            {id: 'c-particle-small-601-light-brown', src: FULLADDR + 'images/episodes/space/particles/small/601_light_brown.png'},
            {id: 'c-particle-small-602-brown', src: FULLADDR + 'images/episodes/space/particles/small/602_brown.png'},
            {id: 'c-particle-small-603-dark-brown', src: FULLADDR + 'images/episodes/space/particles/small/603_dark_brown.png'},
            // particle normal
            {id: 'c-particle-normal-default', src: FULLADDR + 'images/episodes/space/particles/normal/default.png'},
            {id: 'c-particle-normal-100-black', src: FULLADDR + 'images/episodes/space/particles/normal/100_black.png'},
            {id: 'c-particle-normal-101-gray', src: FULLADDR + 'images/episodes/space/particles/normal/101_gray.png'},
            {id: 'c-particle-normal-103-light-gray', src: FULLADDR + 'images/episodes/space/particles/normal/103_light_gray.png'},
            {id: 'c-particle-normal-104-white', src: FULLADDR + 'images/episodes/space/particles/normal/104_white.png'},
            {id: 'c-particle-normal-200-yellow', src: FULLADDR + 'images/episodes/space/particles/normal/200_yellow.png'},
            {id: 'c-particle-normal-201-dark-yellow', src: FULLADDR + 'images/episodes/space/particles/normal/201_dark_yellow.png'},
            {id: 'c-particle-normal-202-spring-orange', src: FULLADDR + 'images/episodes/space/particles/normal/202_spring_orange.png'},
            {id: 'c-particle-normal-203-orange', src: FULLADDR + 'images/episodes/space/particles/normal/203_orange.png'},
            {id: 'c-particle-normal-205-red', src: FULLADDR + 'images/episodes/space/particles/normal/205_red.png'},
            {id: 'c-particle-normal-206-carmin', src: FULLADDR + 'images/episodes/space/particles/normal/206_carmin.png'},
            {id: 'c-particle-normal-300-light-yellow', src: FULLADDR + 'images/episodes/space/particles/normal/300_light_yellow.png'},
            {id: 'c-particle-normal-301-crazy-green', src: FULLADDR + 'images/episodes/space/particles/normal/301_crazy_green.png'},
            {id: 'c-particle-normal-302-yellow-mint', src: FULLADDR + 'images/episodes/space/particles/normal/302_yellow_mint.png'},
            {id: 'c-particle-normal-303-mint', src: FULLADDR + 'images/episodes/space/particles/normal/303_mint.png'},
            {id: 'c-particle-normal-304-green', src: FULLADDR + 'images/episodes/space/particles/normal/304_green.png'},
            {id: 'c-particle-normal-305-dark-green', src: FULLADDR + 'images/episodes/space/particles/normal/305_dark_green.png'},
            {id: 'c-particle-normal-306-black-green', src: FULLADDR + 'images/episodes/space/particles/normal/306_black_green.png'},
            {id: 'c-particle-normal-400-light-blue', src: FULLADDR + 'images/episodes/space/particles/normal/400_light_blue.png'},
            {id: 'c-particle-normal-401-light-blue', src: FULLADDR + 'images/episodes/space/particles/normal/401_light_blue.png'},
            {id: 'c-particle-normal-402-blue', src: FULLADDR + 'images/episodes/space/particles/normal/402_blue.png'},
            {id: 'c-particle-normal-403-dos', src: FULLADDR + 'images/episodes/space/particles/normal/403_dos.png'},
            {id: 'c-particle-normal-404-dark-dos', src: FULLADDR + 'images/episodes/space/particles/normal/404_dark_dos.png'},
            {id: 'c-particle-normal-500-apink', src: FULLADDR + 'images/episodes/space/particles/normal/500_apink.png'},
            {id: 'c-particle-normal-501-light-pink', src: FULLADDR + 'images/episodes/space/particles/normal/501_light_pink.png'},
            {id: 'c-particle-normal-502-pink', src: FULLADDR + 'images/episodes/space/particles/normal/502_pink.png'},
            {id: 'c-particle-normal-503-violet', src: FULLADDR + 'images/episodes/space/particles/normal/503_violet.png'},
            {id: 'c-particle-normal-504-dark-violet', src: FULLADDR + 'images/episodes/space/particles/normal/504_dark_violet.png'},
            {id: 'c-particle-normal-600-red-blood', src: FULLADDR + 'images/episodes/space/particles/normal/600_red_blood.png'},
            {id: 'c-particle-normal-601-light-brown', src: FULLADDR + 'images/episodes/space/particles/normal/601_light_brown.png'},
            {id: 'c-particle-normal-602-brown', src: FULLADDR + 'images/episodes/space/particles/normal/602_brown.png'},
            {id: 'c-particle-normal-603-dark-brown', src: FULLADDR + 'images/episodes/space/particles/normal/603_dark_brown.png'},
            // particle big
            {id: 'c-particle-big-default', src: FULLADDR + 'images/episodes/space/particles/big/default.png'},
            {id: 'c-particle-big-100-black', src: FULLADDR + 'images/episodes/space/particles/big/100_black.png'},
            {id: 'c-particle-big-101-gray', src: FULLADDR + 'images/episodes/space/particles/big/101_gray.png'},
            {id: 'c-particle-big-103-light-gray', src: FULLADDR + 'images/episodes/space/particles/big/103_light_gray.png'},
            {id: 'c-particle-big-104-white', src: FULLADDR + 'images/episodes/space/particles/big/104_white.png'},
            {id: 'c-particle-big-200-yellow', src: FULLADDR + 'images/episodes/space/particles/big/200_yellow.png'},
            {id: 'c-particle-big-201-dark-yellow', src: FULLADDR + 'images/episodes/space/particles/big/201_dark_yellow.png'},
            {id: 'c-particle-big-202-spring-orange', src: FULLADDR + 'images/episodes/space/particles/big/202_spring_orange.png'},
            {id: 'c-particle-big-203-orange', src: FULLADDR + 'images/episodes/space/particles/big/203_orange.png'},
            {id: 'c-particle-big-205-red', src: FULLADDR + 'images/episodes/space/particles/big/205_red.png'},
            {id: 'c-particle-big-206-carmin', src: FULLADDR + 'images/episodes/space/particles/big/206_carmin.png'},
            {id: 'c-particle-big-300-light-yellow', src: FULLADDR + 'images/episodes/space/particles/big/300_light_yellow.png'},
            {id: 'c-particle-big-301-crazy-green', src: FULLADDR + 'images/episodes/space/particles/big/301_crazy_green.png'},
            {id: 'c-particle-big-302-yellow-mint', src: FULLADDR + 'images/episodes/space/particles/big/302_yellow_mint.png'},
            {id: 'c-particle-big-303-mint', src: FULLADDR + 'images/episodes/space/particles/big/303_mint.png'},
            {id: 'c-particle-big-304-green', src: FULLADDR + 'images/episodes/space/particles/big/304_green.png'},
            {id: 'c-particle-big-305-dark-green', src: FULLADDR + 'images/episodes/space/particles/big/305_dark_green.png'},
            {id: 'c-particle-big-306-black-green', src: FULLADDR + 'images/episodes/space/particles/big/306_black_green.png'},
            {id: 'c-particle-big-400-light-blue', src: FULLADDR + 'images/episodes/space/particles/big/400_light_blue.png'},
            {id: 'c-particle-big-401-light-blue', src: FULLADDR + 'images/episodes/space/particles/big/401_light_blue.png'},
            {id: 'c-particle-big-402-blue', src: FULLADDR + 'images/episodes/space/particles/big/402_blue.png'},
            {id: 'c-particle-big-403-dos', src: FULLADDR + 'images/episodes/space/particles/big/403_dos.png'},
            {id: 'c-particle-big-404-dark-dos', src: FULLADDR + 'images/episodes/space/particles/big/404_dark_dos.png'},
            {id: 'c-particle-big-500-apink', src: FULLADDR + 'images/episodes/space/particles/big/500_apink.png'},
            {id: 'c-particle-big-501-light-pink', src: FULLADDR + 'images/episodes/space/particles/big/501_light_pink.png'},
            {id: 'c-particle-big-502-pink', src: FULLADDR + 'images/episodes/space/particles/big/502_pink.png'},
            {id: 'c-particle-big-503-violet', src: FULLADDR + 'images/episodes/space/particles/big/503_violet.png'},
            {id: 'c-particle-big-504-dark-violet', src: FULLADDR + 'images/episodes/space/particles/big/504_dark_violet.png'},
            {id: 'c-particle-big-600-red-blood', src: FULLADDR + 'images/episodes/space/particles/big/600_red_blood.png'},
            {id: 'c-particle-big-601-light-brown', src: FULLADDR + 'images/episodes/space/particles/big/601_light_brown.png'},
            {id: 'c-particle-big-602-brown', src: FULLADDR + 'images/episodes/space/particles/big/602_brown.png'},
            {id: 'c-particle-big-603-dark-brown', src: FULLADDR + 'images/episodes/space/particles/big/603_dark_brown.png'},
            // dashboard
            {id: 'c-dashboard-bg', src: FULLADDR + 'images/episodes/space/dashboard-bg.png'},
            {id: 'c-dashboard-speed', src: FULLADDR + 'images/episodes/space/dashboard-speed.png'},
            // bonuses
            {id: 'c-bonus-3-balls', src: FULLADDR + 'images/episodes/space/bonuses/3_balls/1.png'},
            {id: 'c-bonus-big-ball', src: FULLADDR + 'images/episodes/space/bonuses/big_ball/1.png'},
            {id: 'c-bonus-die', src: FULLADDR + 'images/episodes/space/bonuses/die/1.png'},
            {id: 'c-bonus-extra-life', src: FULLADDR + 'images/episodes/space/bonuses/extra_life/1.png'},
            {id: 'c-bonus-glue-paddle', src: FULLADDR + 'images/episodes/space/bonuses/glue_paddle/1.png'},
            {id: 'c-bonus-grow-paddle', src: FULLADDR + 'images/episodes/space/bonuses/grow_paddle/1.png'},
            {id: 'c-bonus-score', src: FULLADDR + 'images/episodes/space/bonuses/score/1.png'},
            {id: 'c-bonus-shrink-paddle', src: FULLADDR + 'images/episodes/space/bonuses/shrink_paddle/1.png'},
            {id: 'c-bonus-small-ball', src: FULLADDR + 'images/episodes/space/bonuses/small_ball/1.png'},
            {id: 'c-bonus-steel-ball', src: FULLADDR + 'images/episodes/space/bonuses/steel_ball/1.png'},
            {id: 'c-bonus-laser', src: FULLADDR + 'images/episodes/space/bonuses/laser/1.png'},
            // blocks
            {id: 'c-block-empty', src: FULLADDR + 'images/episodes/space/blocks/empty.png'},
            {id: 'c-block-100-black', src: FULLADDR + 'images/episodes/space/blocks/100_black/1.png'},
            {id: 'c-block-101-gray', src: FULLADDR + 'images/episodes/space/blocks/101_gray/1.png'},
            {id: 'c-block-101-gray-anim', src: FULLADDR + 'images/episodes/space/blocks/101_gray/anim.png'},
            {id: 'c-block-103-light-gray', src: FULLADDR + 'images/episodes/space/blocks/103_light_gray/1.png'},
            {id: 'c-block-104-white', src: FULLADDR + 'images/episodes/space/blocks/104_white/1.png'},
            {id: 'c-block-200-yellow', src: FULLADDR + 'images/episodes/space/blocks/200_yellow/1.png'},
            {id: 'c-block-201-dark-yellow', src: FULLADDR + 'images/episodes/space/blocks/201_dark_yellow/1.png'},
            {id: 'c-block-202-spring-orange', src: FULLADDR + 'images/episodes/space/blocks/202_spring_orange/1.png'},
            {id: 'c-block-203-orange', src: FULLADDR + 'images/episodes/space/blocks/203_orange/1.png'},
            {id: 'c-block-205-red', src: FULLADDR + 'images/episodes/space/blocks/205_red/1.png'},
            {id: 'c-block-206-carmin', src: FULLADDR + 'images/episodes/space/blocks/206_carmin/1.png'},
            {id: 'c-block-300-light-yellow', src: FULLADDR + 'images/episodes/space/blocks/300_light_yellow/1.png'},
            {id: 'c-block-301-crazy-green', src: FULLADDR + 'images/episodes/space/blocks/301_crazy_green/1.png'},
            {id: 'c-block-302-yellow-mint', src: FULLADDR + 'images/episodes/space/blocks/302_yellow_mint/1.png'},
            {id: 'c-block-303-mint', src: FULLADDR + 'images/episodes/space/blocks/303_mint/1.png'},
            {id: 'c-block-304-green', src: FULLADDR + 'images/episodes/space/blocks/304_green/1.png'},
            {id: 'c-block-305-dark-green', src: FULLADDR + 'images/episodes/space/blocks/305_dark_green/1.png'},
            {id: 'c-block-306-black-green', src: FULLADDR + 'images/episodes/space/blocks/306_black_green/1.png'},
            {id: 'c-block-400-light-blue', src: FULLADDR + 'images/episodes/space/blocks/400_light_blue/1.png'},
            {id: 'c-block-401-light-blue', src: FULLADDR + 'images/episodes/space/blocks/401_light_blue/1.png'},
            {id: 'c-block-401-light-blue-1', src: FULLADDR + 'images/episodes/space/blocks/401_light_blue/1.png'},
            {id: 'c-block-401-light-blue-2', src: FULLADDR + 'images/episodes/space/blocks/401_light_blue/2.png'},
            {id: 'c-block-401-light-blue-3', src: FULLADDR + 'images/episodes/space/blocks/401_light_blue/3.png'},
            {id: 'c-block-402-blue', src: FULLADDR + 'images/episodes/space/blocks/402_blue/1.png'},
            {id: 'c-block-402-blue-1', src: FULLADDR + 'images/episodes/space/blocks/402_blue/1.png'},
            {id: 'c-block-402-blue-2', src: FULLADDR + 'images/episodes/space/blocks/402_blue/2.png'},
            {id: 'c-block-403-dos', src: FULLADDR + 'images/episodes/space/blocks/403_dos/1.png'},
            {id: 'c-block-404-dark-dos', src: FULLADDR + 'images/episodes/space/blocks/404_dark_dos/1.png'},
            {id: 'c-block-500-apink', src: FULLADDR + 'images/episodes/space/blocks/500_apink/1.png'},
            {id: 'c-block-501-light-pink', src: FULLADDR + 'images/episodes/space/blocks/501_light_pink/1.png'},
            {id: 'c-block-502-pink', src: FULLADDR + 'images/episodes/space/blocks/502_pink/1.png'},
            {id: 'c-block-503-violet', src: FULLADDR + 'images/episodes/space/blocks/503_violet/1.png'},
            {id: 'c-block-504-dark-violet', src: FULLADDR + 'images/episodes/space/blocks/504_dark_violet/1.png'},
            {id: 'c-block-600-red-blood', src: FULLADDR + 'images/episodes/space/blocks/600_red_blood/1.png'},
            {id: 'c-block-601-light-brown', src: FULLADDR + 'images/episodes/space/blocks/601_light_brown/1.png'},
            {id: 'c-block-602-brown', src: FULLADDR + 'images/episodes/space/blocks/602_brown/1.png'},
            {id: 'c-block-603-dark-brown', src: FULLADDR + 'images/episodes/space/blocks/603_dark_brown/1.png'},
            {id: 'c-block-black-hole/spinning', src: FULLADDR + 'images/episodes/space/blocks/black-hole/1.png'},
            {id: 'c-block-black-hole/unstable', src: FULLADDR + 'images/episodes/space/blocks/black-hole/1.png'},
            {id: 'c-block-black-hole/spinning-preview', src: FULLADDR + 'images/episodes/space/blocks/black-hole/spinning.png'},
            {id: 'c-block-black-hole/unstable-preview', src: FULLADDR + 'images/episodes/space/blocks/black-hole/unstable.png'}
        ];
    };
});