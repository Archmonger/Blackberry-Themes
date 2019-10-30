import os

# Function to rename multiple files
def main():
    location = input("Directory/Location: ")
    findStr = input("What is the string to look for: ")
    newStr = input("What is the string to replace with: ")
    for filename in os.listdir(location):
        filenameNew = filename.replace(findStr,newStr)
        dst = location + filenameNew
        src = location + filename
        os.rename(src, dst)

# Driver Code
if(__name__ == '__main__'):
    main()
