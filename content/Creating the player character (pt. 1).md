# Creating the player character (pt. 1)


<iframe src='https://gfycat.com/ifr/PalatableGenerousLeopardseal' frameborder='0' scrolling='no' allowfullscreen ></iframe>

In the beginning, my idea was to have a shapeshifting type of main character, kind of like in Majora's Mask where Link can transform between different characters with unique movesets. However, this would be way out of the scope and budget of a solo dev project, so i decided to keep it as simple as possible. Even so, i had no clue what my character would actually be like. I had a vague a idea about a small spirit type character, but that was it. 

So i asked my wonderfull and talented sister, Aslaug, and she came up with some character sketches i just instantly fell in love with:

<div>
  <img width="320" src="/img/post4/face_sketches.jpg" alt="sketches of character face"/>
  <img width="320" src="/img/post4/character_sketch.jpg" alt="sketches of player"/>
</div>

## Character mesh

After getting good concept art from my sister, i got to work on the 3d-model. I am by no means good at using Blender to make 3d art, but i tried my best to make the head-mesh:

![Head-mesh in enginge](/img/post4/headmesh.png)

After this, i made the body with basic shapes, and rigged the whole thing. I proceeded to import the model into Unreal, and was really satisfied when i finally had my own custom mesh working with animations!

![Model in engine](/img/post4/model.png)

I even added a derpy little cloth for testing:

![Model in engine 2](/img/post4/model2.png)

For now, i am quite happy with the character mesh. I would like to polish the materials and clothing later, but for now i think it looks good enough:

![Player](/img/post4.png)

## Combo system and animations

<iframe src="https://www.youtube.com/embed/ADp-Oh2qpf4?start=38" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

After making the base mesh i had to get to work on animations. To start with, these include:

- Idle
- Walk
- Run
- Strafing
- Backing up
- 4 part combo attacks

Getting the idle/walk/run + strafe animations to work was like a dream due to the 2D blend-spaces in UE4. However, animating is not my strong suit, and it took a lot of time getting the right feel to the animations, especially the attack anims. Making attacks FEEL impactful while still being responsive was a big challange for me, and it took me a lot of hours before i was happy with them.

## Stamina system and hovering

One effortless thing i find to be very satisfying in games, is to be able to move freely, and at a rapid pace! One good example of this is shield-surfing in BotW, and i wanted that feeling to my character. So then i decided that my character would be able to sprint really fast, and also hover mid-air. To make this balanced though, I would need to implement a stamina system. So i did, and made it circular just like another game you might know about... 


### Useful resources

- [Series for creating stamina system](https://youtu.be/rOB273-IAi4)
- [Basic combo system tutorial](https://youtu.be/8CA4e818erY) 