"""
Testing the sorting algorithm
"""

import unittest

from app import get_precision


class TestGetPrecision(unittest.TestCase):
    """
    Testing the get_precision function
    """

    def test_get_precision(self):
        """
        Testing the get_precision function
        """

        self.assertEqual(get_precision(0), 0)

        self.assertEqual(get_precision(-1), 0)

        self.assertEqual(get_precision(1), 0)

        self.assertEqual(get_precision(1000), 3)

        self.assertEqual(get_precision(-1000), 3)

        self.assertEqual(get_precision(1.43), -2)

        self.assertEqual(get_precision(-1.43), -2)


if __name__ == "__main__":
    unittest.main()
