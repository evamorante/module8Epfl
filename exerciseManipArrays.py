# exercice 07. module 8
""" Sort it by alphabetical order.
    Display each song in it on its own line in the terminal.
    Add a 5th song at the end of the array.
    Display how many songs are in the array inside a sentence such as "There are x songs in the array."
    Remove the 3rd song in the array.
    Display the content of the array on one line.
    Display the length of the array.
"""

songs = ["Highway for Heaven", "Viens je t'emmène", "La corrida"]
print(songs[0])
print(songs[1])
print(songs[2])

songs.append(("The magistral wind"))
print(songs)

length_song = len(songs)
print("They are "+str(length_song)+" in the songs array")

songs.pop(2)
print(songs)

print(len(songs))