# Magic, Camera, Hyperbeam!
In this update I have added magic projectiles, a way to aim at targets in third-person, and a super attack! Fighting the crow enemies with purely melee attacks was a bit too difficult, so I decided to implement ranged attacks as soon as possible, in order to get a feel for different styles of fighting.

![Hyperbeam-image](/img/post6.png)

## Camera aim

The biggest headache when aiming with a third person character, is to make the projectile fly where you want it to. In my case, the player character is placed off center relative to the camera, and facing parallell with it. Therefore, the projectile will naturally not go towards the crosshair at the center of the screen. I looked at Breath of the Wild for some ideas on how to fix this to no avail. In BotW, Link's bow is actually placed in the middle of the screen, so off-center aim is not an issue. Centering my character when aiming is not feasible for my game, as the player character is quite low, and thus placing the character in the middle would look really awful.

<video controls autoplay loop muted>
  <source src="/video/aiming.mp4" type="video/mp4">
 </video>

So instead I decided to do a line trace method, so that the player is guaranteed hitting what's in the center of the recticle. The way this works, is that a line is traced from the camera(center of screen), and marks whatever object it first hits. When casting the projectile, it's initial rotation is set to match the object hit by the line trace. One issue with this is that it can sometimes be hard to hit flying enemies due to the need to predict their path. When doing this, the line trace hits objects at different depth, and can somtimes make it harder to hit enemies.

## Projectile feel
For the projectiles, I wanted to make them feel more impactful by forcing the player to charge them before casting. This achieves two things: 
- 1. Making the attacks feel more <b>impactful</b>
- 2. Making the attacks more <i>precise</i>
Furthermore, I plan to make VFX for when charging the attack.


<video controls autoplay loop muted>
  <source src="/video/projectiles.mp4" type="video/mp4">
 </video>


## <b>HYPERBEAM</b>

I saw some awesome looking magic-beam VFX on the Unreal Asset Store, and thought having super-attacks would be a cool addition to the combat, as well as making for a rewarding collectible to find throughout the world. Much like other superweapons (e.g the BFG from DOOM), this is super-broken, but also restricted to a few uses. 

<video controls autoplay loop muted>
  <source src="/video/hyperbeam.mp4" type="video/mp4">
 </video>

## HUD

I wanted the crosshair to be dynamic, so that the player would get a better feel for when to release the projectile in addition to the wind-up animation. 

<video controls autoplay loop muted>
  <source src="/video/crosshair.mp4" type="video/mp4">
 </video>

Having infinite uses of magic and <i>HYPERBEAM</i> would break the game, as melee combat is far inferior. Therefore, I need to restrict their usage in a way. I decided to have a MP-guage for the basic projectiles, and have one-time charges for the hyperbeam. This way, combat is more balanced, and getting drops for the hyper-beam will be super-rewarding. 
I got to work, and made a quick icon for beam usage, and added a MP-bar for the character. 

![Early HUD-design](/img/post6/UI.png)

<i>Please note</i> that I am currently just testing UI functionality. Most HUD-elements (except the stamina bar), are work-in-progress, and will not be a part of the final game!

### Useful resources

- [Hyperbeam VFX](https://www.unrealengine.com/marketplace/en-US/product/niagara-ray-vfx-pack-energy-ray-hit-effects)
- [Projectile VFX](https://www.unrealengine.com/marketplace/en-US/product/niagara-magic-projectiles-sounds-included)