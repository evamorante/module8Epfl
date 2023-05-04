# test point 22. module 8

songs = ["Highway for Heaven", "Viens je t'emmène", "La corrida"]
for x in range(3):
    print(songs[x])
# not the best solution, because if adding a data or more, the number of the range has to be changed

for x in songs:
    print(x) # x or i (usual for coders) no more an iterator - so could call it fruit or b or bloubiboulga
# could add some datas in the array, and it will always work...not with the previous code; with the previous
# code need to change the number of range(...) 
# the video in the point 22. to be seen again if not understood      

for song in songs:
    print(song) # as we could name the variable x as we want, we call it song for example  
       