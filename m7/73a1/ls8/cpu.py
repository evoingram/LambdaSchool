"""CPU functionality."""

import sys

class CPU:
    """Main CPU class."""

    def __init__(self):
        """Construct a new CPU."""
        self.pc = 0
        self.register = [0] * 8
        self.ram = [0] * 256


    def load(self):
        """Load a program into memory."""

        if len(sys.argv) is not 2:
            print(f"{sys.argv[0]} is running")
            sys.exit(1)

        try:

            address = 0
            program_name = sys.argv[1]

            with open(program_name) as new_file:
                for single_line in new_file:
                    x = single_line.split("#", 1)[0]
                    if x.strip() == "": 
                        continue
                    self.ram[address] = bin(x)
                    address += 1
            
            print(self.ram)

        except FileNotFoundError:
            print(f"{sys.argv[0]}   |   {sys.argv[1]}:  file not found")
            sys.exit(2)


        # For now, we've just hardcoded a program:

        # program = [
        #     # From print8.ls8
        #     0b10000010, # LDI R0,8
        #     0b00000000,
        #     0b00001000,
        #     0b01000111, # PRN R0
        #     0b00000000,
        #     0b00000001, # HLT
        # ]

        # for instruction in program_name:
        #     self.ram[address] = instruction
        #     address += 1

    def alu(self, op, reg_a, reg_b):
        """ALU operations."""

        if op == "ADD":
            self.reg[reg_a] += self.reg[reg_b]
        #elif op == "SUB": etc
        else:
            raise Exception("Unsupported ALU operation")

    def trace(self):
        """
        Handy function to print out the CPU state. You might want to call this
        from run() if you need help debugging.
        """

        print(f"TRACE: %02X | %02X %02X %02X |" % (
            self.pc,
            #self.fl,
            #self.ie,
            self.ram_read(self.pc),
            self.ram_read(self.pc + 1),
            self.ram_read(self.pc + 2)
        ), end='')

        for i in range(8):
            print(" %02X" % self.reg[i], end='')

        print()

    def run(self):
        """Run the CPU."""
        running = True
        while running:

            # It needs to read the memory address that's stored in register PC, and store that result in IR, the Instruction Register.
                # This can just be a local variable in run().
            instruction_register = self.ram_read(self.pc)

            # Using ram_read(), read the bytes at PC+1 and PC+2 from RAM into variables operand_a and operand_b in case the instruction needs them.
            operand_a = self.ram_read(instruction_register + 1)
            operand_b = self.ram_read(instruction_register + 2)

            HLT = 0b00000001
            LDI = 0b10000010
            PRN = 0b01000111

            # Then, depending on the value of the opcode, perform the actions needed for the instruction per the LS-8 spec.
                # Maybe an if-elif cascade...? There are other options, too.

            # halt code 
            if self.ram[instruction_register] == HLT:
                running = False

            # Some instructions requires up to the next two bytes of data after the PC in memory to perform operations on.
            # Sometimes the byte value is a register number, other times it's a constant value (in the case of LDI).

            # After running code for any particular instruction, the PC needs to be updated to point to the next instruction for the next iteration of the loop in run().

            elif self.ram[instruction_register] == LDI:
                self.register[operand_a] = operand_b
                self.pc += 3

            elif self.ram[instruction_register] == PRN:
                print(f'{self.register[operand_a]}')
                self.pc += 2
            

    def ram_read(self, address):
        # should accept the address to read and return the value stored there.
        address_value = self.ram[address]
        return address_value

    def ram_write(self, address, value):
        # should accept a value to write and the address to write it to.
        self.ram[address] = value


cpu = CPU()
cpu.load()
