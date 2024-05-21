import csv
import argparse

propertyNames = dict()

def mapProperties(header):
    for i in range(0, len(header)):
        propertyNames[i] = '"{0}"'.format(header[i])

def print_card(card):
    line = '{ '
    line += "name: '{0}'".format(card[0])

    if card[1] != "":
        line += ', count: {0}'.format(card[1])

    if card[2] != "":
        line += ', minPlayers: {0}'.format(card[2])

    line += ', properties: {'
    for i in range(3, len(card)):
        if card[i] != "":
            data = card[i].replace(',', "','")
            line += "{0}: ['{1}'], ".format(propertyNames[i], data)
    line += ' }'

    line += ' },'
    print(line)

def read_and_print_csv(file_path):
    try:
        with open(file_path, mode='r', newline='') as csvfile:
            firstRow = True
            csvreader = csv.reader(csvfile)
            for row in csvreader:

                if firstRow:
                    firstRow = False
                    mapProperties(row)
                else:
                    print_card(row)
    except FileNotFoundError:
        print(f"Error: The file {file_path} does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Read and print a CSV file.')
    parser.add_argument('file_path', type=str, help='The path to the CSV file')
    args = parser.parse_args()

    read_and_print_csv(args.file_path)
