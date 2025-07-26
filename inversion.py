lista=[1,2,3,4,5,6,7]
#forma con for y asignando  append a inv a la lista
inv=[]
i=len(lista)
print(i,lista[0])
for x in range(i,0,-1):
    inv.append(lista[x-1])
print(inv)


# Forma con slicing facil
print(lista[::-1])  

#forma con inverse 
lista.reverse()  
print(lista)  
