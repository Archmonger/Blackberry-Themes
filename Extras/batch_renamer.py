import os
from pathlib import Path


# Function to rename multiple files
def replacer(find_str, new_str, location):
    for file_name in os.listdir(location):
        if file_name.find(find_str) != -1:
            new_file_name = file_name.replace(find_str, new_str)
            src = location + file_name
            dst = location + new_file_name
            print(src)
            print(dst)
            os.chdir(location)
            os.rename(file_name, new_file_name)


# Driver Code
def main():
    if input("[G]eneric rename, or remove copy from [I]cons names?: ").upper() == "G":
        location = input("Directory to look within: ")
        find_str = input("What is the string to look for: ")
        new_str = input("What is the string to replace with: ")
        replacer(find_str, new_str, location)

    else:
        location = Path(__file__).parent / "../Themes/"
        find_str = " copy.png"
        new_str = ".png"
        for directory in os.listdir(location):
            icon_folder_path = location / directory / "Icons"
            if os.path.exists(icon_folder_path):
                replacer(find_str, new_str, str(icon_folder_path.resolve()) + "/")


# Driver Code
if __name__ == "__main__":
    main()
