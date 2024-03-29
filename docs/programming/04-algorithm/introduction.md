---
title: Algorithms
---

An algorithm is the set of instructions in steps to solve a problem.

In real-life if you had to count the number of members in a room, you would count one by one until you finish counting the last member.

So we count a member and add one to the previously counted number, go to the next member, and repeat the same procedure until there are no members in the room. This is a step-wise procedure we use to count the number of members.

For a computer to solve a problem or perform a task for us, for example, a counting problem, we give it a sequence of instructions similar to the step-by-step procedure humans follow. An algorithm is a sequence of instructions given to computers to solve problems or perform tasks.

An algorithm can be written in a plain language, a pseudo-code or described by a diagram-based flowchart and it can be implemented in different computer programming langugages. 

## Pseudo-code
Pseudo-codes are a simplified version of computer programs and written in natural or human-readable language.

- Pseudo-code can be read and followed by programmers to write computer programs.
- Pseudo-code does not have specific syntax and can't be executed by a computer.
- Pseudo-code can be implemented in a specific programming language.

For example, a pseudo-code of counting members in a room can be as follows:

```
set total_number_members to zero
loop while the input of member name is not empty
    increment total_number_members by one
output total_number_members
```

## Flowchart
An algorithm can be described as a pictorial representation with different symbols, shapes, arrow that describes the different process. Each shape describes a different process:

- The process is represented graphically.
- The process is described block by block with the arrows between blocks indicating the order of workflow.
- The described steps are easy to follow.
- Following the logic in diagram does not require understanding of the code.
 
For example, a flowchart of counting members is as follows:
```
                        .......
                       / Start \
                       \......./
                           |
                           V
            ---------------------------------
            |    total_number_members = 0   |
            ---------------------------------
                           |
                           V
                           *
                        *     * 
                     *            *          
                  *                   *
               *                          *       no
     ------> *   input name is not empty?    * ------------
     |         *                          *               |
     |            *                   *                   |
     |               *             *                      |
     |                  *      *                          |
     |                     *                              |
     |                     |  yes                         |
     |                     V                              |
     |    -------------------------------------------     |
     ----|   increment total_number_members by one  |     |
         --------------------------------------------     |
                                                          |
                           --------------------------------
                           |
                           V
                -------------------------------------
               /  output total_number_members       /
              --------------------------------------
                           |
                           V
                        .......
                       /  End  \
                       \......./
```

## Python implementation
The above pseudo-code or flowchart can be followed to write a Python code as follows:
```Python
total_number_members = 0
while input("name? ") != "":
    total_number_members += 1
print(total_number_members)
```

Output:
```
name? "Jack Lee"
name? "Mary Lo"
name?
2
```