import json

wingspan = dict()

with open(r'C:\Users\polka\Downloads\wingspan.json', 'r', encoding='utf-8') as f:
  wingspan = json.loads(f.read())

with open('./src/assets/card-lists/wingspan.csv', 'w', encoding='utf-8') as f:
  f.write('name,count,minPlayers,color,nest,environment,eggs,food,victory points,wingspan,predator\n')

  for bird in wingspan:
    if bird['Expansion'] != 'originalcore':
      continue

    data = [bird['Common name'], '', '', bird['Color'], bird['Nest type']]

    environment = []
    if bird['Forest'] == 'X':
      environment.append('Forest')
    if bird['Grassland'] == 'X':
      environment.append('Grassland')
    if bird['Wetland'] == 'X':
      environment.append('Wetland')
    data.append(','.join(environment))

    data.append(str(int(bird['Egg capacity'])))

    food = []
    if bird['Invertebrate'] != None:
      food.append('Invertebrate')
    if bird['Seed'] != None:
      food.append('Seed')
    if bird['Fish'] != None:
      food.append('Fish')
    if bird['Rodent'] != None:
      food.append('Rodent')
    if bird['Nectar'] != None:
      food.append('Nectar')
    if bird['Wild (food)'] != None:
      food.append('Wild')
    data.append(','.join(food))

    data.append(str(int(bird['Victory points'])))
    data.append(str(bird['Wingspan']))

    if bird['Predator'] != None:
      data.append('Yes')
    else:
      data.append('')

    row = ','.join(['"{0}"'.format(d) for d in data])
    f.write(row + '\n')