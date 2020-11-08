# Combat, Enemies and AI

![Enemy](/img/post5.PNG)

In this update i have made the first enemy type with working AI! I really challenged myself with this one, as this is a flying enemy, and thus we need to work with 3d-pathfinding! In addition, I have made improvements to the combat system, and also made some new UI and VFX elements!

## Crow mesh

To start with, I wanted to make my own low-poly crow mesh, but after some hours, I decided to get a crow character from the Unreal asset store. Instead i created a custom mask for the crow to make it fit more in with my art style. This way, I saved myself a crap-ton of work modeling, rigging and animating. So i whipped up a quick draft in Blender to convince myself that this would work:

![Crow draft](/img/post5/draft.png)


## AI and behavior

Now for the not-so easy part, the flying AI character. This was totally new to me so i was blessed when i found there was two quite good tutorial series on the UE4 AI and behavior systems (link at the bottom). This way i had a chance to know what the hell i was supposed to do and get me going. I seriously can't thank these guys enough. After one night with experimenting and watching tutorials i had a semi-working roaming sequence for the flying AI. 

<iframe src='https://gfycat.com/ifr/DefenselessImpassionedCero' frameborder='0' scrolling='no' allowfullscreen></iframe>

After tinkering some more with the roam sequence, i made the crow follow the player. For now, it just follows a line trace updated roughly twice a second, and attacks within a set radius of the player character. It's not perfect, but a good starting point with potential for further tuning.


## HP system and hit-VFX

To make combat possible i had to implement a HP-system, both for the player and for enemies. For the player i have a classic heart-based system, and a continous HP-bar for the enemies. So i did just that. Please note that the current HP-icons are placeholder!

<video controls autoplay loop>
  <source src="/img/post5/HitEffect.mp4" type="video/mp4">
 </video>

To make combat more responsive, i needed to make on-hit animations for my character, as well as hit-VFX for the player and enemies. In adittion to this, i also made so that the player and enemies get knocked back when hit, to simulate a real impact. Making the hit-VFX was really difficult for me, as i am really new to Niagara systems in Unreal Engine. Luckily, CGHOW is a really good Youtuber who does in-depth VFX tutorials, and thanks to that i got a somewhat good result:


<iframe src='https://gfycat.com/ifr/HarmfulTerrificAlaskanhusky' frameborder='0' scrolling='no' allowfullscreen></iframe>


Furthermore, I would like to make so that when enemies die, they turn into mesh-particles and then gravitate towards the nearest neon-tree! That would be very fitting, and also further improve my VFX/Niagara skills.

### Useful resources

- [Basic AI tutorial](https://www.youtube.com/watch?v=Z0reZj9P1bM)
- [Flying AI tutorial](https://youtu.be/_6JqV3PHyHA) - This was <b>EXTREMELY</b> helpful
- [Heart-based HP UI](https://www.youtube.com/watch?v=66BU_5Vj0Ag)
- [Damage dealing](https://www.youtube.com/watch?v=BQ7X01SmQJA)
- [Impact-effect tutorial](https://www.youtube.com/watch?v=8UThnwfEwng&t=1879s)