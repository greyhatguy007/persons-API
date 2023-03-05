import random

f = open("./datawriter/names.csv", "r")
fnames = set()
lnames = set()
for i in f.readlines():
    fnames.add(i.split(" ")[0])
    lnames.add(i.split(" ")[1][:-2])
f.close()

l = ['const persons = [']

fnames = list(fnames)
lnames = list(lnames)
occupations = ["doctor", "teacher", "scientist", "bussinessman", "engineer", "police"]

for i in range(1,20001):
    occupation = occupations[random.randint(0, len(occupations)-1)]
    fname = fnames[random.randint(0, len(fnames)-1)].lower()
    lname = lnames[random.randint(0, len(lnames)-1)].lower()
    age = random.randint(19,45)
    mid = f' id: {i}, fname: "{fname}", lname: "{lname}", occupation: "{occupation}", age: "{age}"'
    mid = "{" + mid + "},"
    l.append(mid)
l.append("];")
l.append("module.exports = { persons };")

f = open("./server/data/data.js", "w")
f.writelines(l)
f.close()
